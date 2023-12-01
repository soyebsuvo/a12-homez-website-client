import { useEffect, useState } from "react";
import FirstSlide from "../Home/HomeComponents/Banner/FirstSlide";
import PropertyCard from "./PropertyCard";
import image from '../../assets/home-5-2.jpg';

export default function AllProperties() {
    const [allProperties, setAllProperties] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => setAllProperties(data))
    }, [])
    return (
        <div>
            <FirstSlide image={image}></FirstSlide>
            <div className="mt-5">
                <h2 className="text-center text-4xl font-bold w-96 mx-auto border-b-2 pb-3">All Properties</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 px-20">
                {
                    allProperties?.map(item => <PropertyCard key={item._id} item={item}></PropertyCard>)
                }
            </div>

        </div>
    )
}
