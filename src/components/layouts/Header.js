import styled from "styled-components";
import LogoutButton from "../LogoutButton";

export default function Header({ text, type }) {
    return (
        <StyledHeader>
            <Title>{text}</Title>
            {!type && <LogoutButton />}
        </StyledHeader>
    );
}

const Title = styled.span`
    font-size: 26px;
    font-weight: 700;
    color: white;
`;

const StyledHeader = styled.header`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

