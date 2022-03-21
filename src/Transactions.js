import React, { useContext } from 'react'

// Import the Global State
import { Context } from './context';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(Context);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="button"
                    onClick={() => delTransaction(transaction.id)}>
                X
            </button>
        </li>
    )
    }