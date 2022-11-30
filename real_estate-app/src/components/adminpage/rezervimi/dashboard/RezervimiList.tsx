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
  const { rezervimiStore } = useStore();
  const { deleteRezervimin, rezervimet, loading } = rezervimiStore;

  function handlePamjaDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    rezervimiId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteRezervimin(rezervimiId);
  }


  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
      
          <Link to="/createRezervim" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
    
          <TableCell className="tableCell">Emri</TableCell>
          <TableCell className="tableCell">username</TableCell>
          <TableCell className="tableCell">Check_in</TableCell>
          <TableCell className="tableCell">Check_out</TableCell>
          <TableCell className="tableCell">NrPersonave</TableCell>
          <TableCell className="tableCell">Pagesa</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {rezervimet.map((rezervimi) => (
            <TableRow key={rezervimi.rezervimiId}>
              <TableCell className="tableCell">{rezervimi.user?.displayName}</TableCell>
              <TableCell className="tableCell">{rezervimi.user?.username}</TableCell>
              <TableCell className="tableCell">{rezervimi.check_in}</TableCell>
              <TableCell className="tableCell">{rezervimi.check_out}</TableCell>
              <TableCell className="tableCell">{rezervimi.nrPersonave}</TableCell>
              <TableCell className="tableCell">{rezervimi.pagesa}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/rezervimi/${rezervimi.rezervimiId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={rezervimi.rezervimiId}
                  loading={loading && target === rezervimi.rezervimiId}
                  onClick={() => deleteRezervimin(rezervimi.rezervimiId)}
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
