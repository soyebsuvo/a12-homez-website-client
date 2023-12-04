import FirstSlide from "../Home/HomeComponents/Banner/FirstSlide";
import PropertyCard from "./PropertyCard";
import image from '../../assets/home-5-2.jpg';
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";
import useVerifiedProperties from "../../Hooks/useVerifiedProperties";

export default function AllProperties() {
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
    return (
        <div>
            <Helmet>
                <title>Homez | Properties</title>
            </Helmet>
            <FirstSlide image={image}></FirstSlide>
            <div className="mt-5">
                <h2 className="text-center text-4xl font-bold w-96 mx-auto border-b-2 pb-3">All Properties</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 px-20">
                {
                    allVerifiedProperties?.map(item => <PropertyCard key={item._id} item={item}></PropertyCard>)
                }
            </div>

        </div>
    )
}
