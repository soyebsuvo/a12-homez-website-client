import Loader from "../../../Components/Loader";
import usePropertyBought from "../../../Hooks/usePropertyBought"

export default function PropertyBoughtPage() {
    const [propertyBought, isPending] = usePropertyBought();
    if (isPending) {
        return <Loader></Loader>
    }
    return (
        <div className="py-8 md:px-8">
            <div className="mb-6">
                <h2 className="text-center font-bold text-4xl">Offered Properties</h2>
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
                            propertyBought.map((item , index) => <tr key={item?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
