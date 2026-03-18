import { useState } from "react";
import { Checkbox, Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

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
      <Form.Group>
        <Form.Input
          icon="tags"
          width={10}
          label="Description"
          placeholder="New shining thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={6}
          label="Value"
          placeholder="100.00"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox
          toggle
          label="Is expense"
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Form.Group>
      <ButtonSaveOrCancel onSave={onAddEntry} />
    </Form>
  );
}

export default NewEntryForm;
