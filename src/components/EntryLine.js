import { useState } from "react";
import { Grid, GridRow, Icon, Segment } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

function EntryLine({ deleteEntry, description, id, isExpense = false, value }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <Icon name="edit" bordered onClick={() => setIsModalOpen(true)} />
              <Icon name="trash" bordered onClick={onClickDeleteEntry} />
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
      <ModalEdit
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default EntryLine;
