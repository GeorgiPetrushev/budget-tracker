import React,{useContext} from "react";
import { AppContext } from "./context/AppContext";

const Spent = () => {

    const{expense} = useContext(AppContext);


    return <div className="spent box-tracker"> Total Spent: {expense.reduce( (sum , arr)=> sum + arr.cost,0)} $</div>
}

export default Spent;