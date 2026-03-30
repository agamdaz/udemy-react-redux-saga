import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function NewEntryForm() {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();

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
      <ButtonSaveOrCancel onSave={addEntry} />
    </Form>
  );
}

export default NewEntryForm;
