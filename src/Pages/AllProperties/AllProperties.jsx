import FirstSlide from "../Home/HomeComponents/Banner/FirstSlide";
import PropertyCard from "./PropertyCard";
import image from '../../assets/home-5-2.jpg';
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";
import useVerifiedProperties from "../../Hooks/useVerifiedProperties";
import { useState } from "react";

export default function AllProperties() {
    const [ sort , setSort ] = useState(false)
    // const [allProperties, setAllProperties] = useState([]);
    // useEffect(() => {
    //     fetch('https://a-12-homez-server.vercel.app/properties')
    //         .then(res => res.json())
    //         .then(data => setAllProperties(data))
    // }, [])
    const [ allVerifiedProperties , isAllVerifiedPropertiesPending ] = useVerifiedProperties();

    if (isAllVerifiedPropertiesPending) {
        return <Loader></Loader>
    }
    const sortedLowToHigh = [...allVerifiedProperties].sort((a,b) => parseInt(a?.price?.min) - parseInt(b?.price?.min));
    const sortedHighToLow = [...allVerifiedProperties].sort((x,y) => parseInt(y?.price?.min) - parseInt(x?.price?.min));
    return (
        <div>
            <Helmet>
                <title>Homez | Properties</title>
            </Helmet>
            <FirstSlide image={image}></FirstSlide>
            <div className="mt-5">
                <h2 className="text-center text-4xl font-bold w-96 mx-auto border-b-2 pb-3">All Properties</h2>
            </div>
            <div className="md:px-20 py-6">
                <p className="text-sm text-gray-500 py-2">Price</p>
                <button className="px-3 py-1 rounded-full text-white font-bold bg-[#EB6753]" onClick={() => setSort(!sort)}>{sort ? 'See High to Low' : 'See Low to High'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 px-20">
                {
                  sort ? sortedLowToHigh?.map(item => <PropertyCard key={item._id} item={item}></PropertyCard>) : sortedHighToLow?.map(item => <PropertyCard key={item._id} item={item}></PropertyCard>) 
                }
            </div>

        </div>
    )
}
