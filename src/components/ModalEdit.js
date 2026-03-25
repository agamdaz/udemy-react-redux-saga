import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  closeModal,
  description,
  isExpense,
  value,
  setDescription,
  setIsExpense,
  setValue,
  saveEditedEntry,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          isExpense={isExpense}
          value={value}
          setDescription={setDescription}
          setIsExpense={setIsExpense}
          setValue={setValue}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal}>Close</Button>
        <Button
          onClick={() => {
            saveEditedEntry();
            closeModal();
          }}
          primary
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
