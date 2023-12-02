import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import moment from "moment/moment";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function OfferPage() {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const property = useLoaderData();
    const navigate = useNavigate();
    // console.log(property)
    const { agent_name, title, location, price , image} = property || {};
    const handleOfferSubmit = async (e) => {
        e.preventDefault();
        const offeredPrice = e.target.price.value;
        if(offeredPrice < price?.min || offeredPrice > price?.max){
            return toast.error("Insert price between the price range")
        }
        const offeredProperty = { date : moment().format('L'), email : user?.email , title, location , image , agent_name , offeredPrice , status : "pending" }
        const res = await axiosPublic.post("/offeredProperties" , offeredProperty);
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire(
                'Offered!',
                'The agent revieved your offer.',
                'success'
            )
                navigate("/allproperties")
        }
    }
    return (
        <div className="py-8 md:px-20">
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-center">Make An Offer</h2>
            </div>

            <form onSubmit={handleOfferSubmit} className="mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " defaultValue={title} readOnly/>
                    <label htmlFor="Property Title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " readOnly defaultValue={location}/>
                    <label htmlFor="Location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="agent_name" id="agent_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " readOnly defaultValue={agent_name} />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Agent Name</label>
                </div>
                <div className="grid md:grid-cols-1 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price You wnat to Offer (${price?.min} - ${price?.max})<sup>(requered)</sup></label>
                    </div>
                    
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " readOnly defaultValue={user?.email} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Buyer Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#EB6753] focus:outline-none focus:ring-0 focus:border-[#EB6753] peer" placeholder=" " readOnly defaultValue={user?.displayName}/>
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#EB6753] peer-focus:dark:text-[#EB6753] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Buyer name</label>
                    </div>
                </div>
                
                <button type="submit" className="text-white bg-[#EB6753] hover:bg-[#EB6753] focus:ring-4 focus:outline-none focus:ring-[#EB6753] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB6753]">Offer</button>
            </form>
            <p>{}</p>

        </div>
    )
}
