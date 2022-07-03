import styled from "styled-components";
import { useLoadingContext } from "../../contexts/LoadingContext";


export default function InputForm({ text, setValue, type}) {

    const { isLoading } = useLoadingContext();

    function setInput(value) {
        setValue(value);
    }

    return (
        <Input
            required
            disabled={isLoading}
            placeholder={text}
            type={type ? type : "text"}
            onChange={(e) => setInput(e.target.value)}
        />
    );
}

const Input = styled.input`

`;