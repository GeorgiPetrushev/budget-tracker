import React from "react";
import Budget from "./components/Budget";
import AppStyle from "./components/style/AppStyle";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
import AppProvider from "./components/context/AppContext";

function App() {
  return (
    <AppProvider>
      <AppStyle>
        <div className="container">
          <h1 className="tittle">Budget Tracker</h1>
          <div className="container-tracker-bars">
            <Budget />
            <Remaining />
            <Spent />
          </div>
          <h1 className="tittle">Expenses</h1>
          <ExpensesList />
          <h1 className="tittle">Add New Expense</h1>
          <AddExpense />
        </div>
      </AppStyle>
    </AppProvider>
  );
}

export default App;
