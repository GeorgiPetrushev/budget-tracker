import Expense from "./Expense";

const ExpensesList = () => {
  const expense = [
    {
      id: "123",
      type: "shopping",
      cost: "40",
    },
    {
      id: "124",
      type: "car",
      cost: "20",
    },
    {
      id: "125",
      type: "mortgage",
      cost: "1220",
    },
    {
      id: "126",
      type: "insurance",
      cost: "130",
    },
  ];

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
