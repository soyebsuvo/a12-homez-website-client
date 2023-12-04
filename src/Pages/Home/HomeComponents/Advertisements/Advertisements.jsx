import { useEffect, useState } from "react"
import Advertisement from "./Advertisement"

export default function Advertisements() {
    const [ add , setAdd ] = useState([])
    useEffect(() => {
        fetch('https://a-12-homez-server.vercel.app/advertisements')
        .then(res => res.json())
        .then(data => setAdd(data))
    } , [])
  return (
    <div className="py-12 px-20">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-center">Advertisements</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
                add?.map( item => <Advertisement key={item._id} item={item}></Advertisement>)
            }
      </div>
    </div>
  )
}
