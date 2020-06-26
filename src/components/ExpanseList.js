import React, { useContext } from "react";
import { GlobalContexe } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContexe);

  // console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

