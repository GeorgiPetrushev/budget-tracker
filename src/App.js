import React from "react";
import Budget from "./components/Budget";
import AppStyle from "./components/style/AppStyle";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpensesList from "./components/ExpensesList";

function App() {
  return (
    <AppStyle>
    <div className="container">
      <h1 className="tittle">Budget Tracker</h1>
      <div className="container-tracker-bars">
          <Budget />
          <Remaining />
          <Spent />
      </div>
      <h1>Expenses</h1>
      <ExpensesList />
    </div>
    </AppStyle>
  );
}

export default App;
