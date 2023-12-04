import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";
import Loader from "../../../Components/Loader";
import { Helmet } from "react-helmet-async";

export default function ManageUsers() {
    const [users, isUsersPending, refetch] = useUsers();
    const axiosSecure = useAxiosSecure();
    const handleMakeAgent = (id , name) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Agent!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/makeAgent/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Done!',
                                `${name} is now an Agent`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handleMakeAdmin = (id , name) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/makeAdmin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Done!',
                                `${name} is now an Admin`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handleAgentFraud = (id , email) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Mark as Fraud!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/makeFraud/${id}?email=${email}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Done!',
                                `Marked as a fraud User`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handleDeleteUser = async (id) => {
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
                axiosSecure.delete(`/users/${id}`)
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
    if (isUsersPending) {
        return <Loader></Loader>
    }
    return (
        <div className="py-8 md:px-8">
            <Helmet>
        <title>Homez | Dashboard - Manage Users</title>
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
                            <th scope="col" className="px-3 py-3 text-center">
                                Action
                            </th>
                            <th scope="col" className="px-3 py-3 text-center">
                                Action
                            </th>
                            <th scope="col" className="px-3 py-3 text-center">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item, index) => <tr key={item?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-2 p-4 text-center">
                                    {index + 1}
                                </td>
                                <th className="px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{item?.name}</div>
                                        <div className="font-normal text-sm text-gray-500">{item?.email}</div>
                                    </div>
                                </th>
                                <td className="px-3 py-4 text-center">
                                    {item?.role === 'agent' ? <><p>Agent</p><button onClick={() => handleAgentFraud(item?._id , item?.email)} className="px-3 rounded-full border bg-orange-300 font-semibold text-black hover:bg-orange-400">Mark as Fraud</button></> : item?.role === "admin" ? "" : item?.role === "fraud" ? "" :  <button onClick={() => handleMakeAgent(item?._id, item?.name)} className="border rounded-full px-4 py-1 bg-green-300 text-black hover:bg-green-400 font-semibold">Make Agent</button>}
                                </td>
                                <td className="px-3 py-4 text-center">
                                    {item?.role === 'admin' ? "Admin" : item?.role === 'fraud' ? 'Fraud': <button onClick={() => handleMakeAdmin(item?._id , item?.name)} className="border rounded-full px-4 py-1 bg-green-300 text-black hover:bg-green-400 font-semibold">Make Admin</button>}
                                </td>
                                <td className="px-3 py-4 text-center">
                                    <button onClick={() => handleDeleteUser(item?._id)} className="border rounded-full px-4 py-1 bg-red-300 text-black hover:bg-red-400 font-semibold">Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
