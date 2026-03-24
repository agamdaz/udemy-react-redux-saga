import { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const onAddEntry = () => {
    addEntry({ description, isExpense, value });
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
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setValue={setValue}
        value={value}
      />
      <ButtonSaveOrCancel onSave={onAddEntry} />
    </Form>
  );
}

export default NewEntryForm;
