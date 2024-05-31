import React from "react";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpensex";
import './Styles.css';
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

function App(){
    return(
        <div className="App">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </div>
    )
}

export default App;