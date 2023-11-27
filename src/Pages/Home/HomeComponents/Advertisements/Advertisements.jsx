import { useEffect, useState } from "react"
import Advertisement from "./Advertisement"

export default function Advertisements() {
    const [ add , setAdd ] = useState([])
    useEffect(() => {
        fetch('./addvertise.json')
        .then(res => res.json())
        .then(data => setAdd(data))
    } , [])
  return (
    <div className="py-12 px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
                add?.map( item => <Advertisement key={item.id} item={item}></Advertisement>)
            }
      </div>
    </div>
  )
}
