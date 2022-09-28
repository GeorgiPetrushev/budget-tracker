import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const [type, setType] = useState("");
  const [cost, setCost] = useState();

  const { dispatch } = useContext(AppContext);

  const submit = (e) => {
    e.preventDefault();
    const addExpense = {
      id: uuidv4(),
      type: type,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: addExpense,
    });
    setType("");
    setCost("");
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>Expense Type:</label>
      <input
        type="text"
        required="required"
        id="name"
        className="input"
        value={type}
        onChange={(e) => setType(e.target.value)}
      ></input>
      <label>Cost:</label>
      <input
        type="number"
        required="required"
        id="cost"
        className="input"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      ></input>
      <button type="submit" className="submit-button">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
