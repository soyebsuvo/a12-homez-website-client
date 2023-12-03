import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaLuggageCart } from "react-icons/fa";
import Loader from "../../Components/Loader";
import useWishlist from "../../Hooks/useWishlist";

export default function MyProfile() {
    // const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
  const [ wishlist , isPending] = useWishlist();
    const isAdmin = false;
    // console.log(wishlistCount)
    if(isPending){
        return <Loader></Loader>
    }
    return (
        <div className="md:px-8">
            <div className="mb-5 flex gap-3 items-center mt-4">
                <div>
                    <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="Profile" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-left">Hi, {user?.displayName}</h2>
                    <p className="text-sm text-gray-600 mt-1">We are glad to see you again!</p>
                </div>
            </div>
            {isAdmin || <div className="grid grid-cols-4 gap-3">

                <div className="shadow p-6 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-center text-gray-600">Wishlist</p>
                        <h3 className="text-3xl font-bold text-center">{wishlist.length}</h3>
                    </div>
                    <div>
                        <FaLuggageCart className="text-3xl"></FaLuggageCart>
                    </div>
                </div>
                <div>
                    <div>
                        <p></p>
                        <h3></h3>
                    </div>
                    <div>

                    </div>
                </div>
            </div>}

        </div>
    )
}
