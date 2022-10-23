import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment, Table } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";

export default observer(function RoliList() {
  const [target, setTarget] = useState("");

  function handleRoliDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    roliId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteRoli(roliId);
  }

  const { roliStore } = useStore();
  const { deleteRoli, rolet, loading } = roliStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createRole" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Roli</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {rolet.map((roli) => (
            <TableRow key={roli.roliId}>
              <TableCell className="tableCell">{roli.roliId}</TableCell>

              <TableCell className="tableCell">{roli.roli}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/Rolet/${roli.roliId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={roli.roliId}
                  loading={loading && target === roli.roliId}
                  onClick={() => deleteRoli(roli.roliId)}
                  content="Delete"
                  color="red"
                />
              </Table.Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
