

const ExpensesList = () =>{

    const expense = [
        {
            id:'123',
            type: "shopping",
            const: "40"
        },
        {
            id:'124',
            type: "car",
            const: "20"
        }
    ];

    return (
        <div>
            {expense.map(
                (arr) => (
                    <div id={arr.id}>
                    <div>{arr.id}</div>
                    <div>{arr.const}</div>
                    </div>
            )

            )}

        </div>
    )
}

export default ExpensesList