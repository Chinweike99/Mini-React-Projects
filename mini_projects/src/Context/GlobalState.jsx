import React, { createContext, useReducer} from "react";
import AppReducer from './AppReducer';

// INITIAL STATE... 
const initialState = {
    transactions: [
        
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