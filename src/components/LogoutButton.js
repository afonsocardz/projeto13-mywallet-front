import axios from "axios";
import {IonIcon} from "@ionic/react";
import {logOutOutline } from "ionicons/icons";
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
        <div style={{color: "white"}}>
            <IonIcon size={"large"} icon={logOutOutline} onClick={() => logout()}>Logout</IonIcon>
        </div>
    );
}
