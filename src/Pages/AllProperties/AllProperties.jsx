import FirstSlide from "../Home/HomeComponents/Banner/FirstSlide";
import PropertyCard from "./PropertyCard";
import image from '../../assets/home-5-2.jpg';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";

export default function AllProperties() {
    const axiosSecure = useAxiosSecure();
    // const [allProperties, setAllProperties] = useState([]);
    // useEffect(() => {
    //     fetch('https://a-12-homez-server.vercel.app/properties')
    //         .then(res => res.json())
    //         .then(data => setAllProperties(data))
    // }, [])
    const { data: allProperties, isPending } = useQuery({
        queryKey: ["allPropertiesPage"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/properties`);
            return res.data;
        }
    })
    if (isPending) {
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
                    allProperties?.map(item => <PropertyCard key={item._id} item={item}></PropertyCard>)
                }
            </div>

        </div>
    )
}
