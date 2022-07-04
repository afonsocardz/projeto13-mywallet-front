import { useState } from "react";
import styled from "styled-components";
import Form from "../components/shared/Form";
import InputForm from "../components/shared/InputForm";
import ButtonForm from "../components/shared/ButtonForm"
import LoandingContextProvider from "../contexts/LoadingContext";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const body = {
        email,
        password
    };

    return (
        <LoandingContextProvider>
            <Container>
                <Logo>MyWallet</Logo>
                <Form body={body} endpoint={"users/login"}>
                    <InputForm text={"Digite seu e-mail"} setValue={setEmail} />
                    <InputForm text={"Digite sua senha"} setValue={setPassword} />
                    <ButtonForm text={"Entrar"} />
                </Form>
                <Span onClick={() => navigate("/signup")}>Primeira vez? Cadastre-se!</Span>
            </Container>
        </LoandingContextProvider>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

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

