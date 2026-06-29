import { useSelector } from "react-redux"

export default function UserInfo() {
    const data = useSelector((state) => state.user)
  return (
    <div>
      <p>{data.username}, {data.balance}</p>
    </div>
  )
}
