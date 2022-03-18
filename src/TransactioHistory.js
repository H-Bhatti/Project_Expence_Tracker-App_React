import React from "react";

export const TransactionHistory = () => {
    

    return (
        <div className="TransactionHistory">
            <h3> Transactio History </h3>
            <ul className="list">
                <li className="plus">
                    Sold Apple
                    <span>10$</span>
                    <button className="button">x</button>
                </li>
                <li className="minus">
                    Bought Apple
                    <span>-8$</span>
                    <button className="button">x</button>
                </li>
            </ul>
        </div>
    );
}
