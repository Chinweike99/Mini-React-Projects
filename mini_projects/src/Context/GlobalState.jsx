import React, { createContext, useReducer} from "react";
import AppReducer from './AppReducer';

// INITIAL STATE... 
const initialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
    ]
}

// CREATE CONTEXT
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENT
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


// ACTIONS
    function deleteTransactions(id){
        dispatch({
            type: "DELETE",
            payload: id
        });
    }
    
    function addTransaction(transaction){
        dispatch({
            type: "ADD",
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}