import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 100%;
`;
const BalanceBox = styled.div`
    display: flex;
    font-size: 20px;
    width: 100%;
    font-weight: bold;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const AddTransaction = styled.div`
    background: #333;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius:4px;
    cursor: pointer;
    font-size: 16px;
`;
const AddTransactionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ebe8e9;
    gap: 10px;
    padding: 10px;
    margin: 20px;
    & input{
        padding: 6px 8px;
        outline: none;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
    }
`;
const RadioBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    & input{
        width: unset;
        margin: 0 10px;
    }
`

const AddTransactionView = (props) => {
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("EXPENSE");

    const addTransaction = () => {
        props.addTransaction({
            amount: Number(amount),
            desc, type,
            id: Date.now(),
        });
        props.toggleAddTxn();
    }

    return(
        <AddTransactionContainer>
            <input type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"} onChange={(e) => setType(e.target.value)}/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"} onChange={(e) => setType(e.target.value)}/>
                <label htmlFor="income">INCOME</label>
            </RadioBox>
            <AddTransaction onClick={addTransaction}>Add transactions</AddTransaction>
        </AddTransactionContainer>
    );
};

    const ExpenseContainer = styled.div`
        display: flex;
        flex-direction: row;
        gap: 12px;
        margin: 20px;
    `

    const ExpenseBox = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        border: 1.5px solid #e6e8e9;
        padding: 15px 20px;
        font-size: 16px;
        width: 135px;
        & span {
            font-size: 25px;
            font-weight: bold;
            color: ${(props) => props.isIncome ? "green" : "red"};
        }
    `

    const OverviewComponent = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(true);
    return (
        <Container>
            <BalanceBox>
                Balance: ${props.income - props.expense}
                <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible
                 ? "Cancel" : "ADD"}</AddTransaction>               
            </BalanceBox>
            {isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}
            <ExpenseContainer>
                    <ExpenseBox isIncome={false}>
                        Expense<span>${props.expense}</span>
                    </ExpenseBox>
                    <ExpenseBox isIncome={true}>
                        Income<span>${props.income}</span>
                    </ExpenseBox>
            </ExpenseContainer>
        </Container>
    )
}

export default OverviewComponent;