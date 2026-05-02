import types from "../actions/entries.actions";

export default (state = initialEntries, action) => {
  let newState;
  switch (action.type) {
    case types.FILL_INITIAL_ENTRIES:
      return action.payload;
    case types.ADD_ENTRY:
      newState = state.concat({ ...action.payload });
      return newState;
    case types.REMOVE_ENTRY:
      newState = state.filter((entry) => entry.id !== action.payload.id);
      return newState;
    case types.EDIT_ENTRY:
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

var initialEntries = [];
