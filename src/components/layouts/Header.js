import styled from "styled-components";
import LogoutButton from "../LogoutButton";

export default function Header({ text, isHome }) {
    return (
        <StyledHeader>
            <Title>{text}</Title>
            {isHome && <LogoutButton />}
        </StyledHeader>
    );
}

const Title = styled.span`
    font-size: 26px;
    font-weight: 700;
    color: white;
`;

const StyledHeader = styled.header`
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

