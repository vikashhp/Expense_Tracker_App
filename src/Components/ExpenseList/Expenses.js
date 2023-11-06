import ExpenseList from "./ExpenseList";

const Expenses = (props) => {

  return (
    <div>
      {props.items.map((item) => (
        <ExpenseList
          expense={item.expense}
          description={item.description}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Expenses;
