import { useState, useEffect } from "react";
import Form from "../components/shared/Form";
import InputForm from "../components/shared/InputForm";
import ButtonForm from "../components/shared/ButtonForm"
import LoandingContextProvider from "../contexts/LoadingContext";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isDisable, setIsDisable] = useState(true);

    useEffect(() => {
        if ((password.length > 0 && rePassword.length > 0) && password === rePassword) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    }, [password, rePassword]);


    const body = {
        name,
        email,
        password
    };

    return (
        <LoandingContextProvider>
            <Form body={body} endpoint={"users/signup"}>
                <InputForm text={"Digite seu nome completo"} setValue={setName} />
                <InputForm text={"Digite seu e-mail"} setValue={setEmail} />
                <InputForm text={"Digite sua senha"} type={"password"} setValue={setPassword} />
                <InputForm text={"Confirme a sua senha"} type={"password"} setValue={setRePassword} />
                <ButtonForm isDisable={isDisable} text={"Registrar"} />
            </Form>
        </LoandingContextProvider>
    );
}

