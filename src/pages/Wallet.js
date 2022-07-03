
import { useState } from "react";
import Header from "../components/layouts/Header";
import ButtonForm from "../components/shared/ButtonForm";
import Form from "../components/shared/Form";
import InputForm from "../components/shared/InputForm";
import TransactionList from "../components/transaction/TransactionList";
import TransactionOption from "../components/transaction/TransactionOption";


function OutcomeForm() {
    return (
        <Form>
            <InputForm />
            <InputForm />
            <ButtonForm />
        </Form>
    );
}

function IncomeForm() {
    return (
        <Form>
            <InputForm />
            <InputForm />
            <ButtonForm />
        </Form>
    );
}


export default function Wallet() {
    const [isHome, setIsHome] = useState(true);
    return (
        <>
            <Header isHome={isHome}/>
            <TransactionList/>
            <div>
                <TransactionOption/>
                <TransactionOption/>
            </div>
        </>
    );

}