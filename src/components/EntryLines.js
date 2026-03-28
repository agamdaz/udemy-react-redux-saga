import EntryLine from "./EntryLine";

function EntryLines({ entries, editEntry }) {
  return entries.map((entry) => (
    <EntryLine
      key={entry.id}
      editEntry={editEntry}
      description={entry.description}
      isExpense={entry.isExpense}
      id={entry.id}
      value={entry.value}
    />
  ));
}

export default EntryLines;
