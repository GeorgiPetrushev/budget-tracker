import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(budget);

  useEffect(() => {
    setInputValue(budget);
  }, [budget]);

  const changeBudgetValue = (e) => {
    setInputValue(e.target.value);
  };

  const increaseBudget = () => {
    return dispatch({ type: "ADD_100_TO_BUDGET", payload: 100 });
  };
  const decreaseBudget = () => {
    return dispatch({ type: "REMOVE_100_TO_BUDGET", payload: 100 });
  };

  const editBudget = () => {
    setEdit(!edit);
    if (inputValue !== budget) {
      return dispatch({ type: "CHANGE_BUDGE", payload: inputValue });
    }
  };

  return (
    <div>
      {edit ? (
        <div className="budget box-tracker">
          <div className="budget-left">
            {" "}
            <input
            className="input-budget"
              value={inputValue}
              onChange={changeBudgetValue}
              type="number"
              name="budge"
              min="1"
              max="150000"
            ></input>
          </div>
          <div className="budget-right">
            <button onClick={editBudget} className=" budget-button button2">Save</button>
          </div>
        </div>
      ) : (
        <div className="budget box-tracker">
          <div className="budget-left"> Budget: {budget} $ </div>
          <div className="budget-right">
            <button className="budget-button button1" onClick={increaseBudget}>+100</button>
            <button className="budget-button button3" onClick={decreaseBudget}>-100</button>
            <button className="budget-button button2" onClick={editBudget}> Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budget;
