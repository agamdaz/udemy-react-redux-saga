import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBlances({ totalIncome, totalExpenses }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title="Income:"
              value={totalIncome}
              color="green"
              size="tiny"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="Expenses:"
              value={totalExpenses}
              color="red"
              size="tiny"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBlances;
