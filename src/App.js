import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your balance:" value="2,550.53" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine description="Something" value={10.0} isExpene />
      <EntryLine description="Something else" value={100.0} isExpene={false} />
      <EntryLine description="Something" value={20.0} isExpene />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
