import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEntry as addEtryAction } from "../actions/entries.actions";

function useEntryDetails() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const dispatch = useDispatch();

  const addEntry = () => {
    dispatch(
      addEtryAction({
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

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  };
}

export default useEntryDetails;
