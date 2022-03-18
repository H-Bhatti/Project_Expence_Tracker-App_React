import React,{createContext, useReducer} from "react";

import reducerFunction from "./reducer"

//create state globalstate

const initialTransactions = {
    transactions: [
        {
            id:1, description:"income", transaction: 100
        },
        {
            id:1, description:"income 2", transaction: 100
        },
        {
            id:1, description:"expance", transaction: -150
        }
    ]
}
//creating a global context
export const Context = createContext(initialTransactions);

//abcd is wraping the hings that children we need in global context
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducerFunction, initialTransactions)
    return(
        <Context.Provider value = {{transactionsVariable: state.transactions}}>
            {children}
        </Context.Provider>
    );
}