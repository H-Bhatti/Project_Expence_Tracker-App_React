import React,{useState} from "react";

export const NewTransaction = () => {

    const [description, addDescription ] = useState ();
    const [transaction, addTransaction] = useState ();
    

    return(
        <div>
            <h3>New Transaction</h3>
            <form>
                <div className="form">
                    <label htmlFor="discription">
                        Discription
                    </label>
                    <input type="text" id="description" placeholder="Details of transaction" value = {description} onChange={(e)=>addDescription(e.target.value)} ></input>
                    

                </div>
                <div className="form">
                    <label htmlFor="amount">
                        Transaction Amount
                    </label>
                    <input type="number" id="amount" placeholder="Transaction Amount" value = {transaction} onChange={(e)=>addTransaction(e.target.value)}></input>
                   

                </div>
                <button className="addButton">Add New Transaction</button>
            </form>
        </div> 
        
    );

}