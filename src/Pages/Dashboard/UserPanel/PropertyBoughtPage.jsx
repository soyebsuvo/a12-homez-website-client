import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader";
import usePropertyBought from "../../../Hooks/usePropertyBought"
import { Helmet } from "react-helmet-async";

export default function PropertyBoughtPage() {
    const [propertyBought, isPending] = usePropertyBought();
    const totalPrice = propertyBought?.reduce((total, item) => total + parseInt(item.offeredPrice), 0)
    if (isPending) {
        return <Loader></Loader>
    }
    return (
        <div className="py-8 md:px-8">
            <Helmet>
                <title>Homez | Dashboard - Property Bought</title>
            </Helmet>
            <div className="mb-6">
                <h2 className="text-center font-bold text-4xl">Offered Properties</h2>
            </div>
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-2xl font-bold">Total Price : ${totalPrice.toFixed(2)}</h3>
                {totalPrice ? <Link to="/dashboard/payment">
                    <button className="text-white bg-[#EB6753] hover:bg-[#EB6753] focus:ring-4 focus:outline-none focus:ring-[#EB675399] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB675399]">Pay</button>
                </Link> : <button disabled className="text-white bg-[#EB675368] hover:bg-[#EB675368] focus:ring-4 focus:outline-none focus:ring-[#EB675399] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB675399]">Pay</button>}
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
                            <th scope="col" className="px-3 py-3">
                                Agent
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            propertyBought.map((item, index) => <tr key={item?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-2 p-4 text-center">
                                    {index + 1}
                                </td>
                                <th scope="row" className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={item?.image} alt="Jese image" />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{item?.title}</div>
                                        <div className="font-normal text-sm text-gray-500">{item?.location}</div>
                                    </div>
                                </th>
                                <td className="px-3 py-4">
                                    {item?.agent_name}
                                </td>
                                <td className="px-3 py-4">
                                    ${item?.offeredPrice}
                                </td>
                                <td className="px-3 py-4">
                                    {item?.status}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}
