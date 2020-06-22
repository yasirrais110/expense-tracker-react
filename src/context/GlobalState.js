import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Intail State
const initialState = {
    transactions: []
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispach] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction(id){
        dispach({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }
    function addTransaction(transaction){
        dispach({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
