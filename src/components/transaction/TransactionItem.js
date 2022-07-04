import styled from "styled-components";


export default function TransactionItem({ date, description, amount }) {
    const yearRegex = /[/]\d{4}/;
    return (
        <Item>
            <StyledDate>{date.replace(yearRegex, "")}</StyledDate>
            <StyledDescription>{description}</StyledDescription>
            <StyledAmount amount={amount}>{amount}</StyledAmount>
        </Item>
    );
}

const Item = styled.div`
    font-size: 16px;
    display: flex;
    width: 100%;
`;

const StyledDate = styled.span`
    color: #C6C6C6;
    margin-right: 7px;
`;

const StyledDescription = styled.span`
    width: 210px;
    word-wrap: break-word;
`;

const StyledAmount = styled.span`
    display: flex;
    justify-content: end;
    color: ${({ amount }) => amount > 0 ? "#03AC00" : "#C70000"};
    margin-left: auto;
`;