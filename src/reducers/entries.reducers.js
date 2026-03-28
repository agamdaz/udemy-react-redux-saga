export default (state = initialEntries, action) => {
  let newState;
  switch (action.type) {
    case "ADD_ENTRY":
      newState = state.concat({ ...action.payload });
      return newState;
    case "REMOVE_ENTRY":
      newState = state.filter((entry) => entry.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
};

var initialEntries = [
  { id: 1, description: "Work income", value: 1000.0, isExpense: false },
  { id: 2, description: "Water bill", value: 20.0, isExpense: true },
  { id: 3, description: "Rent", value: 200.0, isExpense: true },
  { id: 4, description: "Power bill", value: 50.0, isExpense: true },
];
