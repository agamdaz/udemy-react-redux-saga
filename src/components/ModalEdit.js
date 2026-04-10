import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function ModalEdit({ entry, isOpen }) {
  const {
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
    onCloseModal,
    onSaveModal,
  } = useEntryDetails(entry);

  const handleClose = onCloseModal;
  const handleSave = onSaveModal;

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
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleSave} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
