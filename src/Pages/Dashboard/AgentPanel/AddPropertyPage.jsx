import { useContext } from "react";
// import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import moment from "moment/moment";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

export default function AddPropertyPage() {
    const {
        register,
        handleSubmit,
    } = useForm();
    const { user } = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    // const navigate = useNavigate();
    // console.log(property)
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const handleAddProperty = async (data) => {
        const title = data.title;
        const location = data.location;
        const image = data.image;
        const agent_image = user?.photoURL;
        const agent_name = user?.displayName;
        const minPrice = data.min_price;
        const maxPrice = data.max_price;
        const desc = data.desc;
        
        const res = await axiosSecure.post(image_hosting_api, { image: image[0] }, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const newProperty = { date: moment().format('L'), email: user?.email, title, location, image : res.data.data.display_url, agent_name, agent_image, price: { min : minPrice,max : maxPrice }, desc, verification_status: false }
        console.log(newProperty)
 
        if (res.data.success) {
            const res = await axiosSecure.post("/properties", newProperty);
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire(
                    'Done!',
                    `${title} added to property list`,
                    'success'
                )
                // navigate("/addedProperties")
            }
        }

    }
    return (
        <div className="py-8 md:px-20">
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-center">Add A Property</h2>
            </div>

            <form onSubmit={handleSubmit(handleAddProperty)} className="mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register("title")} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                    <label htmlFor="Property Title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register("location")} type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                    <label htmlFor="Location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register("min_price")} type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="min_price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Min - Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input {...register("max_price")} type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="max_price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
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
                        <textarea {...register("desc")} type="text" name="desc" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                        <label htmlFor="agent_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="property_Image">Property Image</label>
                    <input  {...register("image")} name="image" className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" required />
                </div>

                <button type="submit" className="text-white bg-[#EB6753] hover:bg-[#EB6753] focus:ring-4 focus:outline-none focus:ring-[#EB6753] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB6753]">Add Property</button>
            </form>
            <p>{ }</p>

        </div>
    )
}
