import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import { addEntry } from "../actions/entries.actions";

function NewEntryForm() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const dispatch = useDispatch();
  const handleAddEntry = () => {
    dispatch(
      addEntry({
        id: uuidv4(),
        description,
        isExpense,
        value,
      }),
    );
    setDescription("");
    setValue("");
    setIsExpense(false);
  };

  return (
    <Form
      unstackable
      style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
    >
      <EntryForm
        description={description}
        isExpense={isExpense}
        value={value}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setValue={setValue}
      />
      <ButtonSaveOrCancel onSave={handleAddEntry} />
    </Form>
  );
}

export default NewEntryForm;
