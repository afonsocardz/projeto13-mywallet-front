import styled from "styled-components";
import LogoutButton from "../LogoutButton";

export default function Header({ text, isHome }) {
    return (
        <header>
            <div>
                <Title>{text}</Title>
                {isHome && <LogoutButton />}
            </div>
        </header>
    );
}

const Title = styled.span`

`;