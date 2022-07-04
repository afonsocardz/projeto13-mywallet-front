import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "../components/layouts/Header";
import ButtonForm from "../components/shared/ButtonForm";
import Form from "../components/shared/Form";
import InputForm from "../components/shared/InputForm";
import TransactionList from "../components/transaction/TransactionList";
import TransactionOption from "../components/transaction/TransactionOption";
import LoandingContextProvider from "../contexts/LoadingContext";
import { useUserContext } from "../contexts/UserContext";

function CreateTransaction({ type, setIsHome }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const body = {
        type,
        description,
        amount
    }

    return (
        <LoandingContextProvider>
            <Form endpoint={"users/wallet"} body={body} auth={true}>
                <InputForm text={"Descrição"} setValue={setDescription} />
                <InputForm text={"Digite o valor"} setValue={setAmount} />
                <ButtonForm setIsHome={setIsHome} text={type === "income" ? "Nova entrada" : "Nova saída"} />
            </Form>
        </LoandingContextProvider>
    );
}

function WalletHome({ setIsHome, setType }) {
    return (
        <>
            <TransactionList />
            <OptionsContainer>
                <TransactionOption setIsHome={setIsHome} setType={setType} type={"income"} />
                <TransactionOption setIsHome={setIsHome} setType={setType} type={"outcome"} />
            </OptionsContainer>
        </>
    );
}

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


export default function Wallet() {
    const [isHome, setIsHome] = useState(true);
    const [type, setType] = useState(false);
    const [text, setText] = useState(false);
    const { name } = useUserContext().user;

    useEffect(() => {
        if (isHome) {
            setText(`Olá, ${name}`)
        } else {
            type === 'income' ? setText("Nova entrada") : setText("Nova saída");
        }
    }, [type])

    return (
        <div>
            <Header text={text} isHome={isHome} />
            {isHome ? <WalletHome setType={setType} setIsHome={setIsHome} /> : <CreateTransaction type={type} setIsHome={setIsHome} />}
        </div>
    );

}