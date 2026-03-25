import EntryLine from "./EntryLine";

function EntryLines({ entries, editEntry, deleteEntry }) {
  return entries.map((entry) => (
    <EntryLine
      key={entry.id}
      editEntry={editEntry}
      deleteEntry={deleteEntry}
      description={entry.description}
      isExpense={entry.isExpense}
      id={entry.id}
      value={entry.value}
    />
  ));
}

export default EntryLines;
