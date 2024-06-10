import React, { useState } from "react";
import './styles.css'
import { TransactionInfo } from "./TransactionInfo";
import { TransactionHistory } from "./TransactionHistory";


export const Transactiondetails = () =>{

    const [isTxnVisible, setTxnVisible] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const handleAddTxn = (newTxn) => {
        setTransactions([...transactions, newTxn]);
    }

      // Form component to capture transaction details (replace with your actual form component)
    const TransactionForm = () => {
        const [desc, setDesc] = useState('');
        const [amount, setAmount] = useState("");
        const [type, setType] = useState("income")

        const handleSubmit = (event) =>{
            event.preventDefault();
            const newTxn = {desc, amount: parseFloat(amount), type};
            handleAddTxn(newTxn);
            setDesc("");
            setAmount("");
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
            
            <TransactionInfo transactions={transactions} />
            <span className="addBtn" onClick={() => setTxnVisible(!isTxnVisible)}>{isTxnVisible
                     ? "CANCEL" : "ADD"}</span>
             {isTxnVisible && <TransactionForm />}
             <TransactionHistory transactions={transactions}/>
            <h2>History</h2>
            {/* <ul>
                {transactions.map((transaction, index) =>(
                    <li key={index} className={transaction.type}>
                        <span>{transaction.desc}</span>
                        <span>${transaction.amount}</span>
                        <span>{transaction.type}</span>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}