import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../API";
import { useUserContext } from "../contexts/UserContext";

export default function LogoutButton() {
    const { user } = useUserContext();
    const navigate = useNavigate();
    function logout() {
        const promise = axios.delete(API + "users/logout", user.token);
        promise.then(res => {
            console.log(res);
            navigate("/");
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
}