import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry }) {
  return entries.map((entry) => (
    <EntryLine
      key={entry.id}
      deleteEntry={deleteEntry}
      description={entry.description}
      isExpense={entry.isExpense}
      id={entry.id}
      value={entry.value}
    />
  ));
}

export default EntryLines;
