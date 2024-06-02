import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const green = {
    color: "Green",
    backGround: "red"
}
export const Transaction = ({transaction}) => {
    const {deleteTransactions} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? green : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn"
            onClick={() => deleteTransactions(transaction.id)}>X</button>
        </li>
    )
}