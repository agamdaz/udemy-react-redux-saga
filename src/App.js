import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { getEntries } from "./actions/entries.actions";
import "./App.css";

function App() {
  const [selectedEntry, setSelectedEntry] = useState({});
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  const updateSelectedEntry = () => {
    setSelectedEntry(entries.find((e) => e.id === id) || {});
  };

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.forEach((entry) =>
      entry.isExpense
        ? (totalExpenses += entry.value)
        : (totalIncome += entry.value),
    );
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
  }, [entries]);

  useEffect(updateSelectedEntry, [isOpen, id, entries]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, []);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance
        title="Your balance:"
        value={totalIncome - totalExpenses}
      />
      <DisplayBalances
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} entry={selectedEntry} />
    </Container>
  );
}

export default App;
