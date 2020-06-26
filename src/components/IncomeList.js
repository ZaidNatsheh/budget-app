import React, { useContext } from 'react'
import { GlobalContexe } from '../context/GlobalState'
import  IncomeTransaction  from './IncomeTransactions'

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContexe)
    
    return (
        <div className="transactions-income transactions">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(incomeTransaction => 
                <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
                    )}
            </ul>
            
            
        </div>
    )
}

export default IncomeList






/* import React, { useContext } from 'react'
import { GlobalContexe } from '../context/GlobalState'

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContexe)
    console.log(incomeTransactions)
    return (
        <div className="transactions-income transactions">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(incomeTransaction => 
                    (<li className="transaction">
                    <span className="transaction-text">{incomeTransaction.incomeText}</span>
                    <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
                    <button className="delete-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </li>) )}
            </ul>
            
            
        </div>
    )
}

export default IncomeList




 */