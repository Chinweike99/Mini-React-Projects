import React from "react";


export const TransactionInfo = ({transactions =[]}) =>{
    // Calculate total income and expense
    const totalIncome = transactions.filter(transaction => transaction.type === "income")
                        .reduce((acc, transaction) => acc + transaction.amount, 0);
    
    const totalExpense = transactions.filter(transaction => transaction.type === "expense")
                        .reduce((acc, transaction) => acc + transaction.amount, 0)
    
    const balance = totalIncome - totalExpense;
    
    return(
        <div className="transactionInfo">
            
            <div>
                <h4 className="info">INCOME<span>${totalIncome.toFixed(2)}</span></h4>
                <h4 className="info">EXPENSE<span>${totalExpense.toFixed(2)}</span></h4>
            </div>
            <p>Balance: ${balance.toFixed(2)}</p>
        </div>
    )
}