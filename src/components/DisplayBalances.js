import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBlances({ title, value, color, size }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title="Income:"
              value="1,045.50"
              color="green"
              size="tiny"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="Expenses:"
              value="623.50"
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
