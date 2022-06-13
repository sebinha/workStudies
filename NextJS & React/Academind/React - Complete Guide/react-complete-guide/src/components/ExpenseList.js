import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
export default function ExpenseList(props) {
  const items = props.items;
  return (
    <div className="expenses">
      {items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}
