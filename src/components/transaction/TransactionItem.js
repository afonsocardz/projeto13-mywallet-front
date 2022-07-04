export default function TransactionItem({date, description, amount}) {
    return (
        <div>
            <span>{date}</span>
            <span>{description}</span>
            <span>{amount}</span>
        </div>
    );
}