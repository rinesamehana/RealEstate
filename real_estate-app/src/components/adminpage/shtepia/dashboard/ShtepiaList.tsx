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

export default observer(function ShtepiaList() {
  const [target, setTarget] = useState("");

  function handleShtepiaDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    shtepiaId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteShtepi(shtepiaId);
  }

  const { shtepiaStore } = useStore();
  const { deleteShtepi, shtepiat, loading } = shtepiaStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
         
          <Link to="/createShtepi" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Shtepia</TableCell>
          <TableCell className="tableCell">Photourl</TableCell>
          <TableCell className="tableCell">cmimi</TableCell>
          <TableCell className="tableCell">lokacioni</TableCell>
          <TableCell className="tableCell">nrDhomave</TableCell>
          <TableCell className="tableCell">nrBanjove</TableCell>
          <TableCell className="tableCell">siperfaqja</TableCell>
          <TableCell className="tableCell">pershkrimi</TableCell>
          <TableCell className="tableCell">lagjjaId</TableCell>
          <TableCell className="tableCell">llojiShtepiseId</TableCell>
          <TableCell className="tableCell">gjendjaShtepiseId</TableCell>
          <TableCell className="tableCell">pamjaId</TableCell>
          <TableCell className="tableCell">kafshetId</TableCell>
          <TableCell className="tableCell">stafiId</TableCell>
          
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {shtepiat.map((shtepia) => (
            <TableRow key={shtepia.shtepiaId}>
              <TableCell className="tableCell">{shtepia.shtepiaId}</TableCell>

              <TableCell className="tableCell">
                {shtepia.titulli}
              </TableCell>
              <TableCell className="tableCell">
                {shtepia.photourl}
              </TableCell>
              <TableCell className="tableCell">
                {shtepia.cmimi}
              </TableCell>
              <TableCell className="tableCell">
                {shtepia.lokacioni}
              </TableCell>
              <TableCell className="tableCell">
                {shtepia.nrDhomave}
              </TableCell>
              <TableCell className="tableCell">
                {shtepia.nrBanjove}
              </TableCell>
              <TableCell className="tableCell">
                {shtepia.siperfaqja}
              </TableCell>
              <TableCell className="tableCell">
                {shtepia.pershkrimi}
              </TableCell>

                 <TableCell className="tableCell">
                {shtepia.lagjjaId}
              </TableCell>
                 <TableCell className="tableCell">
                {shtepia.llojiShtepiseId}
              </TableCell>
                 <TableCell className="tableCell">
                {shtepia.gjendjaShtepiseId}
              </TableCell>
                 <TableCell className="tableCell">
                {shtepia.pamjaId}
              </TableCell>
    
                 <TableCell className="tableCell">
                {shtepia.kafshetId}
              </TableCell>
      
               <TableCell className="tableCell">
              {shtepia.stafiId}
            </TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/shtepia/${shtepia.shtepiaId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={shtepia.shtepiaId}
                  loading={loading && target === shtepia.shtepiaId}
                  onClick={() => deleteShtepi(shtepia.shtepiaId)}
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
