import axios from "axios";
import { API } from "../../API";
import { useLoadingContext } from "../../contexts/LoadingContext";
import { useUserContext } from "../../contexts/UserContext";


export default function Form({ body, endpoint, children }) {
    const { setUser } = useUserContext();
    const { setIsLoading } = useLoadingContext();

    function sendForm(e) {
        e.preventDefault();
        setIsLoading(true);

        const promise = axios.post(API + endpoint, body);
        
        promise.then(res => {
            setIsLoading(false);
            setUser(res.token);
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