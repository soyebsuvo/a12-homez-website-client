import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaLuggageCart, FaUsers } from "react-icons/fa";
import Loader from "../../Components/Loader";
import useWishlist from "../../Hooks/useWishlist";
import useAllProperties from "../../Hooks/useAllProperties";
import { TiBusinessCard } from "react-icons/ti";
import useCheckRole from "../../Hooks/useCheckRole";
import useRequestedProperty from "../../Hooks/useRequestedProperty";
import useUsers from "../../Hooks/useUsers";

export default function MyProfile() {
    const [ requestedProperties ] = useRequestedProperty();
    const [ role ] = useCheckRole();
    // const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
  const [ wishlist , isPending] = useWishlist();
  const [ allProperties , isAllPropertiesPending ] = useAllProperties();
  const [ users ] = useUsers();
    // console.log(wishlistCount)
    if(isPending || isAllPropertiesPending){
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
            <div className="mb-4">
                {role && <p className="text-2xl text-gray-500">You are an {role}</p>}
            </div>
           <div className="grid grid-cols-4 gap-3">

                { !role && <div className="shadow p-6 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-center text-gray-600">Wishlist</p>
                        <h3 className="text-3xl font-bold text-center">{wishlist?.length}</h3>
                    </div>
                    <div>
                        <FaLuggageCart className="text-3xl"></FaLuggageCart>
                    </div>
                </div>}
                { role === 'agent' && <div className="shadow p-6 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-center text-gray-600">Added Properties</p>
                        <h3 className="text-3xl font-bold text-center">{allProperties?.length}</h3>
                    </div>
                    <div>
                    <TiBusinessCard className="text-3xl" />
                    </div>
                </div>}
                { role === 'agent' &&
                    <div className="shadow p-6 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-center text-gray-600">Requested Properties</p>
                        <h3 className="text-3xl font-bold text-center">{requestedProperties?.length}</h3>
                    </div>
                    <div>
                    <TiBusinessCard className="text-3xl" />
                    </div>
                </div>
                }
                { role === 'admin' &&
                    <div className="shadow p-6 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-center text-gray-600">Users</p>
                        <h3 className="text-3xl font-bold text-center">{users?.length}</h3>
                    </div>
                    <div>
                    <FaUsers className="text-3xl" />
                    </div>
                </div>
                }
            </div>

        </div>
    )
}
