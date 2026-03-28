import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import "./App.css";

function App() {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [entryIdToEdit, setEntryIdToEdit] = useState("");
  const [description, setDescription] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [value, setValue] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const entries = useSelector((state) => state.entries);

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

  const handleAddEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      isExpense,
      value,
    });
    // setEntries(result);
  };

  const handleEditEntry = (id) => {
    const entry = entries.find((e) => e.id === id);
    if (entry) {
      setEntryIdToEdit(entry.id);
      setDescription(entry.description);
      setIsExpense(entry.isExpense);
      setValue(entry.value);
    }
    setIsModalEditOpen(true);
  };

  const handleSaveEditedEntry = () => {
    const entryIndex = entries.findIndex((e) => e.id === entryIdToEdit);
    if (entryIndex !== -1) {
      const updatedEntries = [...entries];
      updatedEntries[entryIndex] = {
        ...updatedEntries[entryIndex],
        description,
        isExpense,
        value,
      };
      // setEntries(updatedEntries);
    }
    setIsModalEditOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalEditOpen(false);
  };

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
      <EntryLines entries={entries} editEntry={handleEditEntry} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit
        isOpen={isModalEditOpen}
        description={description}
        isExpense={isExpense}
        value={value}
        closeModal={handleCloseModal}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setValue={setValue}
        saveEditedEntry={handleSaveEditedEntry}
      />
    </Container>
  );
}

export default App;
