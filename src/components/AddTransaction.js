import React,{useState, useContext} from 'react'
import {v4 as uuid} from 'uuid'
import { GlobalContexe } from '../context/GlobalState'

const AddTransaction = () => {
    const {addIncome,addExpense} = useContext(GlobalContexe)

    const [income, setIncome] = useState({
        incomeText : "",
        incomeAmount : 0
    })

    const {incomeText,incomeAmount} = income
    const onChangeIncome = e =>{
        setIncome({...income,[e.target.name] : e.target.value})
    }
    const onSubmitIncome = e =>{
        e.preventDefault()

        const newIncomeTransaction = {
            id:uuid(),
            incomeText,
            incomeAmount : incomeAmount * 1
        }
        addIncome(newIncomeTransaction);

        setIncome({
        incomeText : "",
        incomeAmount : 0
        });

    }

    const [expense, setExpense] = useState({
        expenseText : "",
        expenseAmount : 0
    })

    const {expenseText,expenseAmount} = expense
    const onChangeExpense = e =>{
        setExpense({...expense,[e.target.name] : e.target.value})
    }
    const onSubmitExpense = e =>{
        e.preventDefault()

        const newExpenseTransaction = {
            id:uuid(),
            expenseText,
            expenseAmount : expenseAmount * 1
        }
        addExpense(newExpenseTransaction);

        setExpense({
        expenseText : "",
        expenseAmount : 0
        });

    }
    
    

    
    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text"
                     placeholder="Add Income.."
                     required
                     autoComplete="off"
                     name="incomeText"
                     value={incomeText}
                     onChange={onChangeIncome} />
                    <input type="number"
                     placeholder="Amount.."
                     required
                     autoComplete="off" 
                     name="incomeAmount"
                     value={incomeAmount}
                    onChange={onChangeIncome} />
                    <input type="submit" value="submit"/>
                </div>

           </form>  
           <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                <input type="text"
                     placeholder="Add Expense.."
                     required
                     autoComplete="off"
                     name="expenseText"
                     value={expenseText}
                     onChange={onChangeExpense} />
                    <input type="number"
                     placeholder="Amount.."
                     required
                     autoComplete="off" 
                     name="expenseAmount"
                     value={expenseAmount}
                    onChange={onChangeExpense} />
                    <input type="submit" value="submit"/>
                </div>

           </form>           
     </div>
    )
}

export default AddTransaction


/* import React,{useState, useContext} from 'react'
import {v4 as uuid} from 'uuid'
import { GlobalContexe } from '../context/GlobalState'

const AddTransaction = () => {
    const {addIncome} = useContext(GlobalContexe)

    const [income, setIncome] = useState({
        incomeText : "",
        incomeAmount : 0
    })

    const {incomeText,incomeAmount} = income
    const onChangeIncome = e =>{
        setIncome({...income,[e.target.name] : e.target.value})
    }
    const onSubmitIncome = e =>{
        e.preventDefault()

        const newIncomeTransaction = {
            id:uuid(),
            incomeText,
            incomeAmount : incomeAmount * 1
        }
        addIncome(newIncomeTransaction);

    }


    
    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text"
                     placeholder="Add Income.."
                     required
                     autoComplete="off"
                     name="incomeText"
                     onChange={onChangeIncome} />
                    <input type="number"
                     placeholder="Amount.."
                     required
                     autoComplete="off" 
                     name="incomeAmount"
                    onChange={onChangeIncome} />
                    <input type="submit" value="submit"/>
                </div>

           </form>  
           <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Add Expense.." autoComplete="off" />
                    <input type="number" placeholder="Amount.." autoComplete="off" />
                    <input type="submit" value="submit"/>
                </div>

           </form>           
     </div>
    )
}

export default AddTransaction
 */