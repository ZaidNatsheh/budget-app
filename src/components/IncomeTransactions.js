import React, { useContext } from 'react'
import { GlobalContexe } from '../context/GlobalState'

const IncomeTransactions = ({incomeTransaction}) => {
    const {deleteTranaction}=useContext(GlobalContexe)
    return (
        (<li className="transaction">
        <span className="transaction-text">
            {incomeTransaction.incomeText}
            </span>
        <span className="transaction-amount">
            ${incomeTransaction.incomeAmount}
            </span>
        <button className="delete-btn"
        onClick={()=>deleteTranaction(incomeTransaction.id)}>
            <i className="fas fa-trash"></i>
        </button>
    </li>)
    )
}

export default IncomeTransactions
