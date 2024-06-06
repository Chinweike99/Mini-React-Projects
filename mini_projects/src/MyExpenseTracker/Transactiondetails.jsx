import React, { useState } from "react";
import './styles.css'
import { TransactionInfo } from "./TransactionInfo";
// import { TransactionInfo } from "./TransactionInfo";

export const Transactiondetails = () =>{

    const [isTxnVisible, setTxnVisible] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const handleAddTxn = (newTxn) => {
        setTransactions([...transactions, newTxn]);
    }

      // Form component to capture transaction details (replace with your actual form component)
    const TransactionForm = () => {
        const [desc, setDesc] = useState('');
        const [amount, setAmount] = useState();
        const [type, setType] = useState("income")

        const handleSubmit = (event) =>{
            event.preventDefault();
            const newTxn = {desc, amount: parseFloat(amount), type};
            handleAddTxn(newTxn);
            setDesc("");
            setAmount(0);
            setType("income");
        };

        return (
            <form className="txnDet" onSubmit={handleSubmit}>
                <input type="text" placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <button type="submit">Add Transactions</button>
                <div className="radio">
                    <span><input type="radio"
                    name="type" value="income"
                    checked={type === "income"}
                    onChange={(e) => setType(e.target.value)}/>Income</span>

                    <span><input type="radio" 
                    name="type" value="expense"
                    checked={type === "expense"}
                    onChange={(e) => setType(e.target.value)}/>Expense</span>
                </div>
            </form>
        );
    };

    return (
        <div className="txnDet">
            <span className="addBtn" onClick={() => setTxnVisible(!isTxnVisible)}>{isTxnVisible
                     ? "CANCEL" : "ADD"}</span>
            {isTxnVisible && <TransactionForm />}
            <TransactionInfo transactions={transactions} /> {/*This line here is my problem, it keeps creating a new transactionInfo
            div which i do not want, i want the transactionInfo div to have same position as it was*/}
            <h2>History</h2>
            <ul>
                {transactions.map((transaction) =>(
                    <li key={transaction.desc} className={transaction.type}>
                        <span>{transaction.desc}</span>
                        <span>${transaction.amount}</span>
                        <span>{transaction.type}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}