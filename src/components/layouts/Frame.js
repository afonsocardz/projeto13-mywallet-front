import styled from "styled-components";

export default function Frame ({children}){
    return(
        <Background >
            {children}
        </Background>        
    );
}

const Background = styled.div`
    background-color: purple;
    padding: 25px 24px 16px 24px;
    display: flex;
    height: 100%;
    justify-content: center;
`;