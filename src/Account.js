import React from "react";

export const Summary = () => {

    return (
        <div className="SummaryContainer">
            <div className="income">
                <h2>Income
                    <p className="plus">0.00 $</p>
                </h2>
            </div>
            <div className="expance">
                <h2>Expance
                    <p className="minus">0.00 $</p>
                </h2>
            </div>
            
        </div>
    );
}
