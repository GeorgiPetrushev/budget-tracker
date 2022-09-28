import Expense from "./Expense";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const ExpensesList = () => {

  const {expense} = useContext(AppContext);

  return (
    <div className="expense-list">
      {expense.map((expense) => {
        return (
            <Expense key={expense.id} type={expense.type} cost={expense.cost} />
        );
      })}
    </div>
  );
};

export default ExpensesList;
