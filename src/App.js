import { useState } from "react";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import "./App.css";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const handleDeleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const handleAddEntry = ({ description, isExpense, value }) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your balance:" value="2,550.53" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={handleDeleteEntry} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={handleAddEntry} />
    </Container>
  );
}

export default App;

var initialEntries = [
  { id: 1, description: "Work income", value: 1000.0, isExpense: false },
  { id: 2, description: "Water bill", value: 20.0, isExpense: true },
  { id: 3, description: "Rent", value: 200.0, isExpense: true },
  { id: 4, description: "Power bill", value: 50.0, isExpense: true },
];
