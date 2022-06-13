import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    { id: "a1", title: "IPTU", amount: 1050.49, date: new Date(2022, 1, 1) },
    { id: "a2", title: "IPVA", amount: 550.49, date: new Date(2022, 9, 25) },
    {
      id: "a3",
      title: "Cellphone 4G",
      amount: 55.49,
      date: new Date(2022, 3, 24),
    },
    {
      id: "a4",
      title: "Energy Bill",
      amount: 100.49,
      date: new Date(2022, 17, 1),
    },
  ];

  return (
    <div className="App">
      <h1>I'm inside App file</h1>
      <ExpenseList items={expenses}/>
    </div>
  );
}

export default App;
