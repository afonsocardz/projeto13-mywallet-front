import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
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
            <ListContainer>
                <StyledTransactions>
                    {transactions && transactions.map(({ amount, date, description }, index) =>
                        <TransactionItem index={index} amount={amount} date={date} description={description} />)}
                </StyledTransactions>
                <TotalContainer>
                    <span>Saldo</span>
                    <span>R${total}</span>
                </TotalContainer>
            </ListContainer>
        </div>
    );
}

const StyledTransactions = styled.div`
    height: 100%;
    overflow: hidden;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 446px;
    width: 326px;
    border-radius: 5px;
    padding: 23px 12px 12px 12px ;
    margin-bottom: 13px;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
`;