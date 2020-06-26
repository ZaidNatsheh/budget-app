import React,{useContext} from "react";
import { GlobalContexe } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTranaction } = useContext(GlobalContexe);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        
        className="delete-btn"
        onClick={()=>deleteTranaction(expenseTransaction.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;