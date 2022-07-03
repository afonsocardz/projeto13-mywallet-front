import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useLoadingContext } from "../../contexts/LoadingContext";


export default function ButtonForm({ text, isDisable }) {
    const { isLoading } = useLoadingContext();
    return (
        <Button disabled={isDisable}>{isLoading ? <ThreeDots color={"white"} height={"35"} /> : text}</Button>
    );
}

const Button = styled.button`

`;
