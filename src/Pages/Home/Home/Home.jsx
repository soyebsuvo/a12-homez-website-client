import { Helmet } from "react-helmet-async";
import Advertisements from "../HomeComponents/Advertisements/Advertisements";
import Banner from "../HomeComponents/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Homez | Home</title>
      </Helmet>
      <Banner></Banner>
      <Advertisements></Advertisements>
    </div>
  )
}
