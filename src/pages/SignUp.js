import styled from "styled-components";
import { useState, useEffect } from "react";
import Form from "../components/shared/Form";
import InputForm from "../components/shared/InputForm";
import ButtonForm from "../components/shared/ButtonForm"
import LoandingContextProvider from "../contexts/LoadingContext";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/style/ColumnContainer";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isDisable, setIsDisable] = useState(true);
    const navigate = useNavigate();

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
            <Container>
                <Logo>MyWallet</Logo>
                <Form body={body} endpoint={"users/signup"}>
                    <InputForm text={"Digite seu nome completo"} setValue={setName} />
                    <InputForm text={"Digite seu e-mail"} setValue={setEmail} />
                    <InputForm text={"Digite sua senha"} type={"password"} setValue={setPassword} />
                    <InputForm text={"Confirme a sua senha"} type={"password"} setValue={setRePassword} />
                    <ButtonForm isDisable={isDisable} text={"Registrar"} />
                </Form>
                <Span onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</Span>
            </Container>
        </LoandingContextProvider>
    );
}



const Span = styled.span`
    color: white;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    margin-top: 36px;
    cursor: pointer;
`;

const Logo = styled.h1`
    height: 50px;
    margin-bottom: 24px;
    font-family: 'Saira Stencil One', cursive;
    color: white;
    font-size: 32px;
    font-style: normal;
    line-height: 50px;
    text-align: center;
`;

