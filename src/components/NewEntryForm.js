import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={4}
          label="Description"
          placeholder="New shining thing"
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={12}
          label="Value"
          placeholder="100.00"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
