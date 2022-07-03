import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import { useLoadingContext } from "../../contexts/LoadingContext";
import { useUserContext } from "../../contexts/UserContext";


export default function Form({ body, endpoint, children }) {
    const { setUser } = useUserContext();
    const { setIsLoading } = useLoadingContext();
    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        setIsLoading(true);

        const promise = axios.post(API + endpoint, body);

        promise.then(res => {
            const { data } = res;
            setIsLoading(false);

            if (endpoint === "users/login") {
                const obj = {
                    token: {
                        headers: {
                            "Authorization": `Bearer ${data.token}`,
                            "user": body.email,
                        }
                    }
                }
                localStorage.setItem("user", JSON.stringify(obj));
                setUser(obj);
                navigate("/wallet");
            }
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }

    return (
        <form onSubmit={(e) => sendForm(e)}>
            {children}
        </form>
    );
}