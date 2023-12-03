import Swal from "sweetalert2";
import Loader from "../../../Components/Loader";
import useRequestedProperty from "../../../Hooks/useRequestedProperty";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


export default function RequestedProperties() {
    const axiosSecure = useAxiosSecure();
    const [ requestedProperties , isPending , refetch] = useRequestedProperty();
    const handleAccept = (id , image , title) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Accept it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/requested/accept/${id}?image=${image}&title=${title}`)
                .then(res => {
                    if(res.data.modifiedCount){
                        refetch();
                        Swal.fire(
                            'Accepted!',
                            'Offer has been Accepted.',
                            'success'
                          )
                    }
                })              
            }
          })
    }
    const handleReject = (id , image , title) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Reject it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/requested/reject/${id}?image=${image}&title=${title}`)
                .then(res => {
                    if(res.data.modifiedCount){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Offer has been Rejected.',
                            'success'
                          )
                    }
                })              
            }
          })
    }
    if(isPending){
        return <Loader></Loader>
    }
  return (
    <div className="py-8 md:px-8">
            <div className="mb-6">
                <h2 className="text-center font-bold text-4xl">Requested Properties</h2>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                #No.
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Buyer
                            </th>                            
                            <th scope="col" className="px-3 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-3 py-3 text-center">
                                Action
                            </th>
                            <th scope="col" className="px-3 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestedProperties?.map((item , index) => <tr key={item?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-2 p-4 text-center">
                                    {index + 1}
                                </td>
                                <th scope="row" className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={item?.image} alt="Jese image" />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{item?.title}</div>
                                        <div className="font-normal text-sm text-gray-500">{item?.location}</div>
                                    </div>
                                </th>
                                <td className="px-3 py-4">
                                <div className="">
                                        <div className="text-base font-semibold">{item?.buyer_name}</div>
                                        <div className="font-normal text-sm text-gray-500">{item?.email}</div>
                                    </div>
                                </td>
                                <td className="px-3 py-4">
                                    ${item?.offeredPrice}
                                </td>
                                <td className="px-3 py-4">
                                    <button>{item?.status}</button>
                                </td>                                
                                <td className="px-3 py-4 text-center">
                                    { item?.status === 'accepted' ? "Accepted" : item?.status === 'rejected' ? '' : <button onClick={()=>handleAccept(item?._id , item?.image , item?.title)} className="border rounded-full px-4 py-1 bg-green-300 text-black hover:bg-green-400">{item?.status === 'accepted' ? 'Accepted' : "Accept"}</button>}
                                </td>                                
                                <td className="px-3 py-4 text-center">
                                    { item?.status === 'rejected' ? 'Rejected' : item?.status === 'accepted' ? "" : <button onClick={()=>handleReject(item?._id , item?.image , item?.title)} className="border rounded-full px-4 py-1 bg-red-300 text-black hover:bg-red-400">{item?.status === 'rejected' ? 'Rejected' : 'Reject'}</button>}
                                </td>                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
  )
}
