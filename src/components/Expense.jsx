import { IoIosCloseCircle } from "react-icons/io";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

const Expense = ({ type, cost ,id}) => {
  const{dispatch} =useContext(AppContext);

const deleteFunction = () =>{
  return dispatch(
    {type: "DELETE_EXPENSE",
    payload: id,}
  )
}


  return (
    <div className="expense">
      <div className="expense-left">{type}</div>
      <div className="expense-right">
        <div>{cost}$</div>
        <IoIosCloseCircle className="icon" onClick={deleteFunction}/>
      </div>
    </div>
  );
};

export default Expense;
