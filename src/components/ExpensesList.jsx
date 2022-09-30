import Expense from "./Expense";
import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";

const ExpensesList = () => {
  const [inputValue, setInputValue] = useState("");
  const { expense } = useContext(AppContext);
  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        className="input-search"
        type="text"
        placeholder="Search For Expense ..."
        value={inputValue}
        onChange={changeValue}
      ></input>
      {inputValue === "" ? (
        <div className="expense-list">
          {expense.map((expense) => {
            return (
              <Expense
                key={expense.id}
                id={expense.id}
                type={expense.type}
                cost={expense.cost}
              />
            );
          })}
        </div>
      ) : (
        <div className="expense-list">
          {expense
            .filter((expense) => {
              return expense.type.toLowerCase().includes(inputValue);
            })
            .map((expense) => {
              return (
                <Expense
                  key={expense.id}
                  id={expense.id}
                  type={expense.type}
                  cost={expense.cost}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ExpensesList;
