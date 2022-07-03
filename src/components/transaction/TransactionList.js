import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../API";
import TransactionItem from "./TransactionItem";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function TransactionList() {
    const [transactions, setTransactions] = useState([]);
    const [total, setTotal] = useState(0);
    const { user } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user.token)
        const promise = axios.get(API + "users/wallet", user.token);
        promise.then(res => {
            const { data } = res;
            setTransactions(data);
            if (data) {
                const values = data.map(({ amount }) => { return amount });
                let t = 0;
                for (let x = 0; x < values.length; x++) {
                    t += values[x];
                }
                setTotal(t);
            }
        }).catch(err => {
            console.log(err);
            navigate("/");
        });
    },[]);

    

    return (
        <div>
            <div>
                <div>
                    {transactions && transactions.map(({ amount, date, description }, index) =>
                        <TransactionItem index={index} amount={amount} date={date} description={description} />)}
                </div>
                <div>
                    <span>Saldo</span>
                    <span>R${total}</span>
                </div>
            </div>
        </div>
    );
}