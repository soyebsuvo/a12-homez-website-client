import { Link } from "react-router-dom"
import errorImage from "../../assets/errorImage.jpg"
import { Helmet } from "react-helmet-async"
export default function ErrorPage() {
  return (

    <div className="md:flex justify-center items-center gap-8 md:px-20 h-screen">
      <Helmet>
        <title>Homez | Error</title>
      </Helmet>
      <div className="md:w-1/2 p-8">
        <img className="w-full" src={errorImage} alt="" />
      </div>
      <div className="md:w-1/2 px-8">
        <h3 className="text-7xl font-bold text-center">404</h3>
        <h4 className="text-3xl font-bold text-center">Page Not Found</h4>
        <div className="flex justify-center items-center mt-4">
          <Link to="/"><button className="px-3 py-1 rounded-lg text-white bg-[#EB6753]">Go Back to Homepage</button></Link>
        </div>
      </div>
    </div>
  )
}
