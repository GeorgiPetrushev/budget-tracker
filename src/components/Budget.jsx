import React from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Budget = () =>{

    const { budget } = useContext(AppContext); 

    return <div className="budget box-tracker"> {budget} $</div>
}

export default Budget;