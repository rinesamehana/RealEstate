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

export default observer(function KontrataList() {
  const [target, setTarget] = useState("");

  function handleKontratDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    kontrataId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteKontrat(kontrataId);
  }

  const { kontrataStore } = useStore();
  const { deleteKontrat, kontratat, loading } = kontrataStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createKontrata" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Lloji Kontrates</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {kontratat.map((kontrata) => (
            <TableRow key={kontrata.kontrataId}>
              <TableCell className="tableCell">{kontrata.kontrataId}</TableCell>

              <TableCell className="tableCell">
                {kontrata.llojiKontrates}
              </TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/kontrata/${kontrata.kontrataId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={kontrata.kontrataId}
                  loading={loading && target === kontrata.kontrataId}
                  onClick={() => deleteKontrat(kontrata.kontrataId)}
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
