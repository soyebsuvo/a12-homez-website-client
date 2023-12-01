import { useLoaderData } from "react-router-dom"

export default function PropertyDetails() {
    const property = useLoaderData();
    const { agent_name, agent_image, title, image, location, price_range, desc, verification_status } = property || {};
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h3>{location}</h3>
            </div>
        </div>
    )
}
