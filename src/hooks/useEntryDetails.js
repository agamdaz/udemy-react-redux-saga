import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEntry as addEtryAction } from "../actions/entries.actions";
import { closeEditModal } from "../actions/modals.actions";
import { editEntry as editEtryAction } from "../actions/entries.actions";

const defaultEntry = {
  id: uuidv4(),
  description: "",
  isExpense: false,
  value: "",
};

function useEntryDetails(entry = defaultEntry) {
  const [description, setDescription] = useState(entry.description);
  const [value, setValue] = useState(entry.value);
  const [isExpense, setIsExpense] = useState(entry.isExpense);

  useEffect(() => {
    setDescription(entry.description);
    setValue(entry.value);
    setIsExpense(entry.isExpense);
  }, [entry]);

  const resetEntryDetails = () => {
    setDescription("");
    setValue("");
    setIsExpense(false);
  };

  const dispatch = useDispatch();

  const addEntry = () => {
    dispatch(addEtryAction({ id: entry.id, description, isExpense, value }));
    resetEntryDetails();
  };

  const onCloseModal = () => {
    dispatch(closeEditModal());
    resetEntryDetails();
  };

  const onSaveModal = () => {
    dispatch(editEtryAction({ id: entry.id, description, isExpense, value }));
    dispatch(closeEditModal());
    resetEntryDetails();
  };

  return {
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
    addEntry,
    onCloseModal,
    onSaveModal,
  };
}

export default useEntryDetails;
