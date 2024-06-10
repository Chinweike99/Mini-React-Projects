import React, {  useState } from "react";
import './styles.css'

export const TransactionHistory = ({transactions}) =>{
    const [searchTerm, setSearchTerm] = useState('');
    // Filter transactions based on search term
    const filteredTxn = transactions.filter(transaction =>
        transaction.desc.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    return(
        <div className="history" >
            <input type="search" placeholder="Search" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <ul>
                {filteredTxn.map((transaction, index) =>(
                    <li key={index} className={transaction.type}>
                        <span>{transaction.desc}</span>
                        <span>${transaction.amount}</span>
                        <span>{transaction.type}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}