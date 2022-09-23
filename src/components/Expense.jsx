import { IoIosCloseCircle } from "react-icons/io";

const Expense = ({ type, cost }) => {

  return (
    <div className="expense">
      <div className="expense-left">{type}</div>
      <div className="expense-right">
        <div>{cost}$</div>
        <IoIosCloseCircle className="icon" />
      </div>
    </div>
  );
};

export default Expense;
