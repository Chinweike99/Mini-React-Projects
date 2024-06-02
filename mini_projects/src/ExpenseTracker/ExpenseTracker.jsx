import React from "react";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpensex";
import './Styles.css';
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "../Context/GlobalState";

function App(){
    return(
        <div className="App">
            <GlobalProvider>
                <Header />
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </GlobalProvider>
        </div>
    )
}

export default App;