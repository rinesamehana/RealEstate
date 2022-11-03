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
  import { Gjendja } from "../../../../app/models/Gjendja";
  import { useStore } from "../../../../app/stores/store";
  
  export default observer(function GjendjaList() {
    const [target, setTarget] = useState("");
  
    function handleAmbientDelete(
      e: SyntheticEvent<HTMLButtonElement>,
      gjendjaId: string
    ) {
      setTarget(e.currentTarget.name);
      deleteGjendje(gjendjaId);
    }
  
    
    const { gjendjaStore } = useStore();
    const { deleteGjendje, gjendjet, loading } = gjendjaStore;
    return (
      <TableContainer className="table">
        <div className="datatable">
          <div className="datatableTitle">
            Add New User
            <Link to="/createGjendje" className="link">
              Add New
            </Link>
          </div>
        </div>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead></TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">gjendja</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
  
          <TableBody>
             {gjendjet.map((gjendja) => (
              <TableRow key={gjendja.gjendjaId}>
                <TableCell className="tableCell">{gjendja.gjendjaId}</TableCell>
  
                <TableCell className="tableCell">
                  {gjendja.gjendja}
                </TableCell>
                <Table.Cell>
                  <Button
                    // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                    inverted
                    as={Link}
                    to={`/gjendja/${gjendja.gjendjaId}`}
                    loading={loading}
                    class="ui inverted blue button"
                    color="blue"
                    content="Edit"
                  />
                  <Button
                    inverted
                    class="ui negative basic button"
                    name={gjendja.gjendjaId}
                    loading={loading && target === gjendja.gjendjaId}
                    onClick={() => deleteGjendje(gjendja.gjendjaId)}
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
  