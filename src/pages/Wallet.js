
import { useState } from "react";
import Header from "../components/layouts/Header";
import ButtonForm from "../components/shared/ButtonForm";
import Form from "../components/shared/Form";
import InputForm from "../components/shared/InputForm";
import TransactionList from "../components/transaction/TransactionList";
import TransactionOption from "../components/transaction/TransactionOption";
import LoandingContextProvider from "../contexts/LoadingContext";

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
                <ButtonForm  text={type === "income" ? "Adicionar Entrada" : "Adicionar Saída"} />
            </Form>
        </LoandingContextProvider>
    );
}

function WalletHome({ setIsHome, setType }) {
    return (
        <>
            <TransactionList />
            <div>
                <TransactionOption setIsHome={setIsHome} setType={setType} type={"income"} />
                <TransactionOption setIsHome={setIsHome} setType={setType} type={"outcome"} />
            </div>
        </>
    );
}


export default function Wallet() {
    const [isHome, setIsHome] = useState(true);
    const [type, setType] = useState(false);

    return (
        <div>
            <Header isHome={isHome} />
            {isHome ? <WalletHome setType={setType} setIsHome={setIsHome} /> : <CreateTransaction type={type} setIsHome={setIsHome} />}
        </div>
    );

}