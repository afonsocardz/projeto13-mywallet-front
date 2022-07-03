import { useState } from "react";
import Form from "../components/shared/Form";
import InputForm from "../components/shared/InputForm";
import ButtonForm from "../components/shared/ButtonForm"
import LoandingContextProvider from "../contexts/LoadingContext";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const body = {
        email,
        password
    };

    return (
        <LoandingContextProvider>
            <Form body={body} endpoint={"users/login"}>
                <InputForm text={"Digite seu e-mail"} setValue={setEmail} />
                <InputForm text={"Digite sua senha"} setValue={setPassword} />
                <ButtonForm text={"Entrar"} />
            </Form>
        </LoandingContextProvider>
    );
}

