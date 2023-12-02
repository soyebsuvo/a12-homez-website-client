import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider"

export default function WelcomeDashboard() {
    const {user} = useContext(AuthContext)
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col justify-center items-center">
        <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="" />
        <h2 className="text-center text-3xl">Hi, {user?.displayName}</h2>
        <h3 className="text-center text-2xl">Welcome to your dashboard</h3>
      </div>
    </div>
  )
}
