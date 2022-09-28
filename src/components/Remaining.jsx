import { useContext } from "react"
import { AppContext } from "./context/AppContext"


const Remaining = () =>{

    const {budget , expense} =useContext(AppContext);
    let result = expense.reduce( (sum , arr)=> sum + arr.cost,0);
    

    return <div className="remaining box-tracker" style={(budget < result)?{backgroundColor: '#fd5c63'}: null}>
        Remaining: {budget-result} $
    </div>
}

export default Remaining