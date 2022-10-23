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

export default observer(function StafiList() {
  const [target, setTarget] = useState("");

  function handleStafiDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    stafiId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteStafi(stafiId);
  }

  const { stafiStore } = useStore();
  const { deleteStafi, stafii, loading } = stafiStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createStaf" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Emri</TableCell>
          <TableCell className="tableCell">Mbiemri</TableCell>
          <TableCell className="tableCell">Email</TableCell>
          <TableCell className="tableCell">NrTelefonit</TableCell>
          <TableCell className="tableCell">Roli</TableCell>
          <TableCell className="tableCell">LlojiUser</TableCell>
          <TableCell className="tableCell">Orari Punes</TableCell>
          <TableCell className="tableCell">Gjinia</TableCell>
          <TableCell className="tableCell">Qyteti</TableCell>
          <TableCell className="tableCell">Shteti</TableCell>
          <TableCell className="tableCell">Adressa</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {stafii.map((stafi) => (
            <TableRow key={stafi.stafiId}>
              <TableCell className="tableCell">{stafi.stafiId}</TableCell>

              <TableCell className="tableCell">{stafi.emri}</TableCell>
              <TableCell className="tableCell">{stafi.mbiemri}</TableCell>
              <TableCell className="tableCell">{stafi.email}</TableCell>
              <TableCell className="tableCell">{stafi.nrTelefonit}</TableCell>
              <TableCell className="tableCell">{stafi.roliId}</TableCell>
              <TableCell className="tableCell">{stafi.llojiUserId}</TableCell>
              <TableCell className="tableCell">{stafi.kohaId}</TableCell>
              <TableCell className="tableCell">{stafi.gjiniaId}</TableCell>
              <TableCell className="tableCell">{stafi.qytetiId}</TableCell>
              <TableCell className="tableCell">{stafi.shtetiId}</TableCell>
              <TableCell className="tableCell">{stafi.adresa}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/Stafi/${stafi.stafiId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={stafi.stafiId}
                  loading={loading && target === stafi.stafiId}
                  onClick={() => deleteStafi(stafi.stafiId)}
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
