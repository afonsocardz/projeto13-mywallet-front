import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import { useLoadingContext } from "../../contexts/LoadingContext";
import { useUserContext } from "../../contexts/UserContext";


export default function Form({ body, endpoint, children, auth = false, setType }) {
    const { user, setUser } = useUserContext();
    const { setIsLoading} = useLoadingContext();
    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        setIsLoading(true);

        const promise = auth ?
            axios.post(API + endpoint, body, user.token) :
            axios.post(API + endpoint, body);

        promise.then(res => {
            const { data } = res;
            setIsLoading(false);
            if (endpoint.includes("wallet")){
                setType(false);
            }
            if(endpoint.includes("signup")){
                navigate("/")
            }
            if (endpoint === "users/login") {
                const obj = {
                    name: data.user.name,
                    token: {
                        headers: {
                            "Authorization": `Bearer ${data.token}`,
                            "user": data.user.email,
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
        <StyledForm onSubmit={(e) => sendForm(e)}>
            {children}
        </StyledForm>
    );
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;