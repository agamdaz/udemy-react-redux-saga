const types = {
  GET_INITIAL_ENTRIES: "GET_INITIAL_ENTRIES",
  FILL_INITIAL_ENTRIES: "FILL_INITIAL_ENTRIES",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  EDIT_ENTRY: "EDIT_ENTRY",
};

export default types;

export const addEntry = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};

export const removeEntry = (id) => {
  return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const editEntry = (payload) => {
  return { type: types.EDIT_ENTRY, payload };
};

export const getEntries = () => {
  return { type: types.GET_INITIAL_ENTRIES };
};
