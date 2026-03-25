import { Form } from "semantic-ui-react";

function EnryForm({
  description,
  isExpense,
  value,
  setDescription,
  setIsExpense,
  setValue,
}) {
  return (
    <>
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
    </>
  );
}

export default EnryForm;
