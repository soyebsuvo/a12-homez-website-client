import logo2 from "../../assets/header-logo2.svg"
import { CgProfile } from "react-icons/cg";
import { FaAd, FaLuggageCart } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { FaRegCommentDots } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useWishlist from "../../Hooks/useWishlist";
import { LiaSellcast } from "react-icons/lia";


export default function Dashboard() {
  let role = "agent"
  const [wishlist] = useWishlist();
  return (
    <div className="md:px-20 h-screen">
      <div className="grid grid-cols-12 h-full">
        {/* sidenav */}
        <div className="col-span-3 bg-[#eee] h-full">
          <div className="py-3 flex justify-center items-center mb-8">
            <Link to="/"><img className='w-32 z-10' src={logo2} alt="" /></Link>
          </div>
          { !role && <ul className="px-8">
            <NavLink to="/dashboard/myProfile"><li className="flex items-center gap-2 font-bold py-1"><CgProfile className="text-xl" />My Profile</li></NavLink>
            <NavLink to="/dashboard/wishlist"><li className="flex items-center gap-2 font-bold py-1"><FaLuggageCart className="text-xl" />Wishlist ({wishlist?.length})</li></NavLink>
            <NavLink to="/dashboard/propertyBought"><li className="flex items-center gap-2 font-bold py-1"><TiBusinessCard className="text-xl" />Property bought.</li></NavLink>
            <NavLink to="/dashboard/myReviews"><li className="flex items-center gap-2 font-bold py-1"><FaRegCommentDots className="text-xl" />My reviews.</li></NavLink>
          </ul>}
          { role === "agent" && <ul className="px-8">
            <NavLink to="/dashboard/myProfile"><li className="flex items-center gap-2 font-bold py-1"><CgProfile className="text-xl" />Agent Profile</li></NavLink>
            <NavLink to="/dashboard/addProperty"><li className="flex items-center gap-2 font-bold py-1"><FaAd className="text-xl" />Add Property</li></NavLink>
            <NavLink to="/dashboard/agentAddedProperty"><li className="flex items-center gap-2 font-bold py-1"><TiBusinessCard className="text-xl" />My Added Properties</li></NavLink>
            <NavLink to="/dashboard/myReviews"><li className="flex items-center gap-2 font-bold py-1"><LiaSellcast className="text-xl" />My sold Properties.</li></NavLink>
            <NavLink to="/dashboard/requestedProperties"><li className="flex items-center gap-2 font-bold py-1"><FaRegCommentDots className="text-xl" />Requested Properties.</li></NavLink>
          </ul>}
        </div>
        {/* preview */}
        <div className="col-span-9">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
