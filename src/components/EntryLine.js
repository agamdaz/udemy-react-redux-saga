import { Grid, GridRow, Icon, Segment } from "semantic-ui-react";

function EntryLine({
  editEntry,
  deleteEntry,
  description,
  id,
  isExpense = false,
  value,
}) {
  const onClickEditEntry = () => editEntry(id);
  const onClickDeleteEntry = () => deleteEntry(id);

  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={onClickEditEntry} />
              <Icon name="trash" bordered onClick={onClickDeleteEntry} />
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
    </>
  );
}

export default EntryLine;
