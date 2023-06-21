import { useDispatch } from "react-redux";
import { logout } from "../reducers/authSlice";


const Hey = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Hey</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Hey