import useMySoldProperties from "../../../Hooks/useMySoldProperties"

export default function MySoldProperties() {
    const [ mySoldProperties ] = useMySoldProperties();
  return (
    <div>
      {mySoldProperties?.length}
    </div>
  )
}
