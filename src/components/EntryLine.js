import { Grid, GridRow, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntry } from "../actions/entries.actions";

function EntryLine({ editEntry, description, id, isExpense = false, value }) {
  const dispatch = useDispatch();
  const onClickEditEntry = () => editEntry(id);
  const handleDeleteEntry = () => dispatch(removeEntry(id));

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
              <Icon name="trash" bordered onClick={handleDeleteEntry} />
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
    </>
  );
}

export default EntryLine;
