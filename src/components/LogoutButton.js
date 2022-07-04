import axios from "axios";
import styled from 'styled-components';
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
        <Logout>
            <IonIcon size={"large"} icon={logOutOutline} onClick={() => logout()}>Logout</IonIcon>
        </Logout>
    );
}

const Logout = styled.div`
    color: white;
    cursor: pointer;
`;
