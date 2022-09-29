import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((arr) => arr.id !== action.payload),
      };
    case "ADD_100_TO_BUDGET":
      return {
        ...state,
        budget: state.budget + action.payload,
      };
    case "REMOVE_100_TO_BUDGET":
      return {
        ...state,
        budget: state.budget - action.payload,
      };
    case "CHANGE_BUDGE":
      return {
        ...state,
        budget:  action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: uuidv4(),
      type: "shopping",
      cost: 40,
    },
    {
      id: uuidv4(),
      type: "car",
      cost: 20,
    },
    {
      id: uuidv4(),
      type: "mortgage",
      cost: 1220,
    },
    {
      id: uuidv4(),
      type: "insurance",
      cost: 130,
    },
  ],
};

export const AppContext = createContext();

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{ budget: state.budget, expense: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
