import React from "react";
import { TransactionInfo } from "./TransactionInfo";
import { Transactiondetails } from "./Transactiondetails";
import { TransactionHistory } from "./TransactionHistory";

export const HomeComponent = () => {
    return(
        <div>
            {/* <TransactionInfo /> */}
            <Transactiondetails />
            {/* <TransactionHistory /> */}
        </div>
    )
}