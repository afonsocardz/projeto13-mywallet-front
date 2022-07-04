import styled from "styled-components";
const img = true;

export default function TransactionOption({ type, setType, setIsHome }) {
    function action (){
        setType(type);
        setIsHome(false);
    }
    return(
        <Option onClick={() => action()}>
            <img src={img} alt={"image"}/>
            <span>{type === "income" ? "Adicionar entrada" : "Adicionar Saída"}</span>
        </Option>
    );
}
const Option = styled.div`
    background-color: blue;
    color: white;
    width: 300px;
    height: 200px;
`;
