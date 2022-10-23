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
import { Ambienti } from "../../../../app/models/Ambienti";
import { useStore } from "../../../../app/stores/store";

export default observer(function AmbientiList() {
  const [target, setTarget] = useState("");

  function handleAmbientDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    ambientiId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteAmbient(ambientiId);
  }

  const { ambientiStore } = useStore();
  const { deleteAmbient, ambientet, loading } = ambientiStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createAmbient" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Ambienti</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {ambientet.map((ambienti) => (
            <TableRow key={ambienti.ambientiId}>
              <TableCell className="tableCell">{ambienti.ambientiId}</TableCell>

              <TableCell className="tableCell">
                {ambienti.llojiAmbient}
              </TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/ambienti/${ambienti.ambientiId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={ambienti.ambientiId}
                  loading={loading && target === ambienti.ambientiId}
                  onClick={() => deleteAmbient(ambienti.ambientiId)}
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
