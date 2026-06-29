import { useDispatch } from "react-redux"
import { addMoney, removeMoney } from './store'

export default function Button() {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(addMoney(2000))}>Add Money</button>
      <button onClick={() => dispatch(removeMoney(100))}>Remove Money</button>
    </div>
  )
}
