import { Helmet } from "react-helmet-async";
import Loader from "../../../Components/Loader";
import useMySoldProperties from "../../../Hooks/useMySoldProperties"

export default function MySoldProperties() {
    const [ mySoldProperties , isMySoldPropertiesPending] = useMySoldProperties();
    if(isMySoldPropertiesPending){
        return <Loader></Loader>
    }
    return (
    <div className="py-6 md:px-12">
        <Helmet>
        <title>Homez | Dashboard - Sold Property</title>
      </Helmet>
      <div className="mb-5">
        <h2 className="text-4xl font-bold text-center">My Sold Properties</h2>
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
                                Buyer
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
                            mySoldProperties?.map((item , index) => <tr key={item?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                                <div className="">
                                        <div className="text-base font-semibold">{item?.buyer_name}</div>
                                        <div className="font-normal text-sm text-gray-500">{item?.email}</div>
                                    </div>
                                </td>
                                <td className="px-3 py-4">
                                    ${item?.offeredPrice}
                                </td>
                                <td className="px-3 py-4">
                                    <button>{item?.status}</button>
                                </td>                                
                                                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}
