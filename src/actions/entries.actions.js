export const addEntry = (payload) => {
  return { type: "ADD_ENTRY", payload };
};

export const removeEntry = (id) => {
  return { type: "REMOVE_ENTRY", payload: { id } };
};

export const editEntry = (payload) => {
  return { type: "EDIT_ENTRY", payload };
};
