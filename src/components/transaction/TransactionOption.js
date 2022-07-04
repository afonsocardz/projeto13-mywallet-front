import styled from "styled-components";
import {IonIcon} from "@ionic/react";
import {addCircleOutline, removeCircleOutline } from "ionicons/icons";

export default function TransactionOption({ type, setType, setIsHome }) {
    function action (){
        setType(type);
        setIsHome(false);
    }

    const icon = type === "income" ? addCircleOutline : removeCircleOutline;
    return(
        <Option onClick={() => action()}>
            <IonIcon icon={icon} size={"large"}/>
            <Span>{type === "income" ? "Nova entrada" : "Nova saída"}</Span>
        </Option>
    );
}
const Option = styled.div`
    background-color: #A328D6;
    color: white;
    width: 155px;
    height: 114px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
`;

const Span = styled.span`
    width: 64px;
    word-wrap: normal;
`;
