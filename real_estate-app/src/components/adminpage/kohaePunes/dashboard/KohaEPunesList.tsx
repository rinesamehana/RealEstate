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

export default observer(function KohaEPunesList() {
  const [target, setTarget] = useState("");

  function handleKohaPunesDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    kohaId: string
  ) {
    setTarget(e.currentTarget.name);
    deletekohePune(kohaId);
  }

  const { kohaPunesStore } = useStore();
  const { deletekohePune, kohetePunes, loading } = kohaPunesStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
   
          <Link to="/createKohePune" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">KohaPunes</TableCell>
          <TableCell className="tableCell">Koha</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {kohetePunes.map((kohaPunes) => (
            <TableRow key={kohaPunes.kohaId}>
              <TableCell className="tableCell">{kohaPunes.kohaId}</TableCell>

              <TableCell className="tableCell">
                {kohaPunes.kohaEPuness}
              </TableCell>
              <TableCell className="tableCell">{kohaPunes.koha}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/KohaPunes/${kohaPunes.kohaId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={kohaPunes.kohaId}
                  loading={loading && target === kohaPunes.kohaId}
                  onClick={() => deletekohePune(kohaPunes.kohaId)}
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
