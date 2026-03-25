import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({
  addEntry,
  description,
  isExpense,
  value,
  setDescription,
  setIsExpense,
  setValue,
}) {
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
