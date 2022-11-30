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
import { useStore } from "../../app/stores/store";


export default observer(function RezervimiInfo() {
  const [target, setTarget] = useState("");
  const { rezervimiStore, userStore } = useStore();
  const { deleteRezervimin, rezervimet, loading } = rezervimiStore;
const {user}=userStore;



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
    

          <TableCell className="tableCell">Check_in</TableCell>
          <TableCell className="tableCell">Check_out</TableCell>
          <TableCell className="tableCell">NrPersonave</TableCell>
          <TableCell className="tableCell">Pagesa</TableCell>
          
        </TableRow>

        <TableBody>
          {user?.rezervimet?.map((rezervimi:any) => (
            <TableRow key={rezervimi.rezervimiId}>
 
              <TableCell className="tableCell">{rezervimi.check_in}</TableCell>
              <TableCell className="tableCell">{rezervimi.check_out}</TableCell>
              <TableCell className="tableCell">{rezervimi.nrPersonave}</TableCell>
              <TableCell className="tableCell">{rezervimi.pagesa}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
