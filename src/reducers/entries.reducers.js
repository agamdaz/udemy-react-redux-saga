export default (state = initialEntries, action) => {
  let newState;
  switch (action.type) {
    case "ADD_ENTRY":
      newState = state.concat({ ...action.payload });
      return newState;
    case "REMOVE_ENTRY":
      newState = state.filter((entry) => entry.id !== action.payload.id);
      return newState;
    case "EDIT_ENTRY":
      newState = state.map((entry) => {
        if (entry.id === action.payload.id) {
          return { ...entry, ...action.payload };
        }
        return entry;
      });
      return newState;
    default:
      return state;
  }
};

var initialEntries = [
  { id: 1, description: "Work income Redux", value: 1000.0, isExpense: false },
  { id: 2, description: "Water bill Redux", value: 20.0, isExpense: true },
  { id: 3, description: "Rent Redux", value: 200.0, isExpense: true },
  { id: 4, description: "Power bill Redux", value: 50.0, isExpense: true },
];
