import Loader from "../../Components/Loader";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useWishlist from "../../Hooks/useWishlist";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";


export default function Wishlist() {
    const axiosPublic = useAxiosPublic();
    const [wishlist, isPending, refetch] = useWishlist();
    const handleRemoveItem = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/wishlist/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    if (isPending) {
        return <Loader></Loader>
    }
    return (
        <div className="md:px-10">
            <div className="py-4 mb-5">
                <h2 className="text-center text-4xl font-bold">Wishlist</h2>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-8">
                    {
                        wishlist?.map(item =>

                            <div key={item?._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="relative">
                                    <img className="rounded-t-lg" src={item?.image} alt="" />
                                    <p className="absolute bottom-0 bg-[rgba(0,0,0,.5)] text-white font-bold w-full px-4">${item?.price?.min} - ${item?.price?.max}</p>
                                </div>
                                <div className="p-5">
                                    <div>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.title}</h5>
                                    </div>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{item?.location}</p>
                                    <div className="flex justify-start items-center gap-3 mb-5">
                                        <div>
                                            <img className="w-10 h-10 rounded-full" src={item?.agent_image} alt="" />
                                        </div>
                                        <div>
                                            <h3>Agent - {item?.agent_name}</h3>
                                            <h3 className="text-sm">{item?.verification ? 'Verified' : 'Unverified'}</h3>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 justify-end">
                                        <button onClick={() => handleRemoveItem(item?._id)} className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#EB6753] dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB6753]">
                                            Remove <FaTrash></FaTrash>

                                        </button>
                                        <Link to={`/dashboard/makeOffer/${item?._id}`}>
                                            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#EB6753] rounded-lg hover:bg-[#EB6753] focus:ring-4 focus:outline-none focus:ring-[#EB6753] dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB6753]">
                                                Make Offer
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
