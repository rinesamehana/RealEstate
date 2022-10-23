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
import { Pajisja } from "../../../../app/models/Pajisja";
import { useStore } from "../../../../app/stores/store";

export default observer(function PajisjeList() {
  const [target, setTarget] = useState("");

  function handlePajisjeDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    pajisjaId: string
  ) {
    setTarget(e.currentTarget.name);
    deletePajisje(pajisjaId);
  }

  const { pajisjaStore } = useStore();
  const { deletePajisje, pajisjet, loading } = pajisjaStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createPajisje" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">pajisje</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {pajisjet.map((pajisja) => (
            <TableRow key={pajisja.pajisjaId}>
              <TableCell className="tableCell">{pajisja.pajisjaId}</TableCell>

              <TableCell className="tableCell">
                {pajisja.llojiPajisjes}
              </TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/pajisja/${pajisja.pajisjaId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={pajisja.pajisjaId}
                  loading={loading && target === pajisja.pajisjaId}
                  onClick={() => deletePajisje(pajisja.pajisjaId)}
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
