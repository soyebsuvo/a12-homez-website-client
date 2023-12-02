import { useLoaderData } from "react-router-dom"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

export default function PropertyDetails() {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const property = useLoaderData();
    const { agent_name, agent_image, title, image, location, price, desc , verification_status } = property || {};
    const wishItem = { email : user?.email, agent_name, agent_image, title, image, location, price, desc, verification_status };
    const handleAddToWishlist = async () => {
        const res = await axiosPublic.post("/wishlist" , wishItem);
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire(
                'Done',
                `${title} added to wishlist`,
                'success'
              )
        }
    }
    return (
        <div className="md:px-20 py-8">
            <div className="flex gap-10">
                <div style={{ height : '560px'}} className="w-4/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <img className="p-5 rounded-t-lg w-full h-[400px]" src={image} alt="product image" />
                    </div>
                    <div className="px-5 pb-5">
                        <div>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                            <h3 className="text-sm text-gray-600">{location}</h3>
                        </div>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-[#EB6753] text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#EB6753] ms-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">${price?.min} - ${price?.max}</span>
                            <button onClick={handleAddToWishlist} className="text-white bg-[#EB6753] hover:bg-[#EB6753] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-blue-800">Add to Wishlist</button>
                        </div>
                    </div>
                </div>

                {/* Right Side Menu */}
                <div className="w-2/6">
                    <div className="bg-white shadow px-4 py-5 rounded-lg">
                        <h2 className="text-2xl font-bold pb-4">Get More Information</h2>
                        <div className="flex items-center gap-5 mb-4">
                            <img className="w-14 h-14 rounded-full" src={agent_image} alt="" />
                            <div>
                                <h3 className="font-bold">{agent_name}</h3>
                                <p>+88909***876</p>
                            </div>
                        </div>
                        <div>
                            <button className="w-full px-5 py-2 rounded-lg bg-transparent text-black border border-black">Contact Agent</button>
                        </div>
                    </div>
                    <div className="p-4 shadow rounded-lg mt-5">
                        <h3 className="text-xl font-bold py-3">Property Description</h3>
                        <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
