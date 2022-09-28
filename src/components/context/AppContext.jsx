import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
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
