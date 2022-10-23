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
import { Pamja } from "../../../../app/models/Pamja";
import { useStore } from "../../../../app/stores/store";

export default observer(function PamjaList() {
  const [target, setTarget] = useState("");

  function handlePamjaDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    pamjaId: string
  ) {
    setTarget(e.currentTarget.name);
    deletePamje(pamjaId);
  }

  const { pamjaStore } = useStore();
  const { deletePamje, pamjet, loading } = pamjaStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createPamja" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">pamja</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {pamjet.map((pamja) => (
            <TableRow key={pamja.pamjaId}>
              <TableCell className="tableCell">{pamja.pamjaId}</TableCell>

              <TableCell className="tableCell">{pamja.pamjaa}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/pamja/${pamja.pamjaId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={pamja.pamjaId}
                  loading={loading && target === pamja.pamjaId}
                  onClick={() => deletePamje(pamja.pamjaId)}
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
