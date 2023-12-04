import Swal from "sweetalert2";
import Loader from "../../../Components/Loader";
import useUnverifiedProperties from "../../../Hooks/useUnverifiedProperties"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

export default function ManageProperties() {
    const axiosSecure = useAxiosSecure();
    const [ unvefiedProperties , isUnvefiedPropertiesPending , refetch] = useUnverifiedProperties();
    const handleVerify = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Verify it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/requested/verify/property/${id}`)
                .then(res => {
                    if(res.data.modifiedCount){
                        refetch();
                        Swal.fire(
                            'Verified!',
                            'Offer has been verified.',
                            'success'
                          )
                    }
                })              
            }
          })
    }
    const handleReject = (id) => {
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
                axiosSecure.patch(`/requested/reject/property/${id}`)
                .then(res => {
                    if(res.data.modifiedCount){
                        refetch();
                        Swal.fire(
                            'Rejected!',
                            'Offer has been Rejected.',
                            'success'
                          )
                    }
                })              
            }
          })
    }
    if(isUnvefiedPropertiesPending){
        return <Loader></Loader>
    }
    return (
        <div className="py-8 md:px-8">
            <Helmet>
        <title>Homez | Dashboard - Manage Property</title>
      </Helmet>
            <div className="mb-6">
                <h2 className="text-center font-bold text-4xl">Manage Properties</h2>
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
                                Agent
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-3 py-3 text-center">
                                Status
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            unvefiedProperties?.map((item, index) => <tr key={item?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-2 py-4 text-center">
                                    {index + 1}
                                </td>
                                <th scope="row" className="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={item?.image} alt="Jese image" />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{item?.title}</div>
                                        <div className="font-normal text-sm text-gray-500">{item?.location}</div>
                                    </div>
                                </th>
                                <td className="py-4">
                                    <div className="">
                                        <div className="text-base font-semibold">{item?.agent_name}</div>
                                        <div className="font-normal text-sm text-gray-500">{item?.agent_email}</div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    ${item?.price?.min} - ${item?.price?.max}
                                </td>
                                <td className="py-4 text-center">
                                    {item?.verification_status !== 'unverified' && <button>{item?.verification_status}</button>}
                                    {item?.verification_status === 'unverified' && <button onClick={() => handleVerify(item?._id)} className="border rounded-full px-4 py-1 bg-green-300 text-black hover:bg-green-400 mr-4 text-sm">{item?.status === 'verified' ? 'Verified' : "Verify"}</button> }
                                    {item?.verification_status === 'unverified' && <button onClick={() => handleReject(item?._id)} className="border rounded-full px-4 py-1 bg-red-300 text-black hover:bg-red-400 text-sm">{item?.status === 'rejected' ? 'Rejected' : 'Reject'}</button>}
                                </td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
