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

export default observer(function RezervimiList() {
  const [target, setTarget] = useState("");

  function handleRezervimDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    rezervimiId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteRezervimin(rezervimiId);
  }

  const { rezervimiStore } = useStore();
  const { deleteRezervimin, rezervimet, loading } = rezervimiStore;
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
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">check_in</TableCell>
          <TableCell className="tableCell">check_out</TableCell>
          <TableCell className="tableCell">shtepiaId</TableCell>
          <TableCell className="tableCell">menyraPagesesId</TableCell>
          <TableCell className="tableCell">kontrataId</TableCell>
          {/* <TableCell className="tableCell">appUserId</TableCell> */}

          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {rezervimet.map((rezervimi) => (
            <TableRow key={rezervimi.rezervimiId}>
              <TableCell className="tableCell">{rezervimi.rezervimiId}</TableCell>

              <TableCell className="tableCell">
                {rezervimi.check_in}
              </TableCell>
              <TableCell className="tableCell">
                {rezervimi.check_out}
              </TableCell>
  
              <TableCell className="tableCell">
                {rezervimi.shtepiaId}
              </TableCell>
              <TableCell className="tableCell">
                {rezervimi.menyraPagesesId}
              </TableCell>
              <TableCell className="tableCell">
                {rezervimi.kontrataId}
              </TableCell>
              {/* <TableCell className="tableCell">
                {rezervimi.appUserId}
              </TableCell> */}
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
