import styled from "styled-components";

const AppStyle = styled.div`
  margin: auto;
  padding: 1rem;
  max-width: 860px;
  font-size: 1.1rem;

  // Budget tracker

  .container-tracker-bars {
    display: grid;
    grid-gap: 1rem;
    @media only screen and (min-width: 900px) {
      font-size: 1.2rem;
      grid-template-columns: 1.4fr 1fr 1fr;
    }
  }
  .box-tracker {
    padding: 1rem;
    border-radius: 0.5rem;
  }
  .budget {
    background-color: #bebebe;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .budget-right{
    
  }
  .remaining {
    background-color: #abd699;
  }
  .spent {
    background-color: #ffe26a;
  }
  //Remove Arrows Input
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none; 
  }
  //Budget Button
  .budget-button{
    transition: 400ms;
    margin-left: 5px;
    border-radius: 0.2rem;
    
  }
  .button1 {
  background-color: white; 
  color: black; 
  border: 1px solid #4CAF50;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}

.button2 {
  background-color: white; 
  color: black; 
  border: 1px solid #008CBA;
}

.button2:hover {
  background-color: #008CBA;
  color: white;
}

.button3 {
  background-color: white; 
  color: black; 
  border: 1px solid #f44336;
}

.button3:hover {
  background-color: #f44336;
  color: white;
}

  // Expense

  .expense-list {
    border-radius: 0.5rem;
    border: 1px solid black;
  }
  .expense {
    padding: 1rem;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
  .expense:last-of-type {
    border-bottom: none;
  }
  .expense-right {
    display: flex;
    align-items: center;
    div {
      margin-right: 1rem;
      background-color: #ffe26a;
      padding: 0 0.7rem;
      border-radius: 0.5rem;
    }
    .icon {
      font-size: 2rem;
      transition: 0.25s;
      cursor: pointer;
    }
    .icon:hover {
      color: #ef3038;
    }
  }

  //Add New Expense
  .form {
    display: grid;
    grid-gap: 1rem;
  }
  .input {
    font-size: 1.5rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .submit-button {
    height: 3rem;
  }
`;

export default AppStyle;
