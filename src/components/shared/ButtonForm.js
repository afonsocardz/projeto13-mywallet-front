import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useLoadingContext } from "../../contexts/LoadingContext";


export default function ButtonForm({ text, isDisable }) {
    const { isLoading } = useLoadingContext();
    return (
        <Button  disabled={isDisable}>{isLoading ? <ThreeDots color={"white"} height={"35"} /> : text}</Button>
    );
}

const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
