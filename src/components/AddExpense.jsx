import React from "react";

const AddExpense = () => {
  return (
    <form className="form">
      <label>Expense Type:</label>
      <input type="text" required="required" id="name" className="input"></input>
      <label>Cost:</label>
      <input type="number" required="required" id="cost" className="input"></input>
      <button type="submit" className="submit-button">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
