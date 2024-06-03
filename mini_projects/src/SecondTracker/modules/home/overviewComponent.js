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
const AddTransaction = styled.button`
    background: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius:4px;
    cursor: pointer;
    font-size: 16px;
`;
const AddTransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ebe8e9;
    gap: 10px;
    padding: 10px;
    margin: 10px;
    & input{
        padding: 4px 8px;
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
`

const AddTransactionView = () => {
    return(
        <AddTransactionContainer>
            <input placeholder="amount"/>
            <input placeholder="Description"/>
            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE"/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="INCOME"/>
                <label htmlFor="income">INCOME</label>
            </RadioBox>
        </AddTransactionContainer>
    )
}

const OverviewComponent = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(true);


    return (
        <Container>
            <BalanceBox>
                Balance: $2000
                <AddTransaction onClick={AddTransactionContainer}>{isAddTxnVisible ? "Cancel" : "ADD"}</AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && <AddTransactionView />}
        </Container>
    )
}

export default OverviewComponent;