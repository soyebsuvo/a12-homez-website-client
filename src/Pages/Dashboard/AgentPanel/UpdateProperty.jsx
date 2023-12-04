import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function UpdateProperty() {
    const property = useLoaderData();
    
    const {
        register,
        handleSubmit,
    } = useForm();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const handleUpdateProperty = async (data) => {
        const title = data.title;
        const location = data.location;
        const minPrice = data.min_price;
        const maxPrice = data.max_price;
        const desc = data.desc;
        
        const updatedProperty = { title, location, price: { min : minPrice,max : maxPrice }, desc}
        
            const res = await axiosSecure.patch(`/properties/${property?._id}`, updatedProperty);
            if (res.data.modifiedCount) {
                Swal.fire(
                    'Done!',
                    `${title} Updated successfully`,
                    'success'
                )
                navigate("/dashboard/agentAddedProperty")            
        }

    }
    if(!property){
        return;
    }
  return (
    <div className="py-8 md:px-20">
        <Helmet>
        <title>Homez | Dashboard - Update Property</title>
      </Helmet>
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-center">Add A Property</h2>
            </div>

            <form onSubmit={handleSubmit(handleUpdateProperty)} className="mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input defaultValue={property?.title} {...register("title")} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                    <label htmlFor="Property Title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input defaultValue={property?.location} {...register("location")} type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                    <label htmlFor="Location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input defaultValue={property?.price?.min} {...register("min_price")} type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="min_price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Min - Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input defaultValue={property?.price?.max} {...register("max_price")} type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="max_price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Max - Price</label>
                    </div>

                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register("agent_email")} type="email" name="agent_email" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " defaultValue={user?.email} readOnly />
                        <label htmlFor="agent_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Agent Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register("agent_name")} type="text" name="agent_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " defaultValue={user?.displayName} readOnly />
                        <label htmlFor="agent_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Agent name</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 md:gap-6">

                    <div className="relative z-0 w-full mb-5 group">
                        <textarea defaultValue={property?.desc} {...register("desc")} type="text" name="desc" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                        <label htmlFor="agent_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                </div>
                <button type="submit" className="text-white bg-[#EB6753] hover:bg-[#EB6753] focus:ring-4 focus:outline-none focus:ring-[#EB6753] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB6753]">Update Property</button>
            </form>

        </div>
  )
}
