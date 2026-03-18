import { Grid, GridRow, Icon, Segment } from "semantic-ui-react";

function EntryLine({ description, value, isExpene = false }) {
  return (
    <Segment color={isExpene ? "red" : "green"}>
      <Grid columns={3} textAlign="right">
        <GridRow>
          <Grid.Column width={10} textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            ${value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </Grid.Column>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default EntryLine;
