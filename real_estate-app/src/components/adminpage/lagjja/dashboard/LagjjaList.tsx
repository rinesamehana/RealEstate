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
import { Lagjja } from "../../../../app/models/Lagjja";
import { useStore } from "../../../../app/stores/store";

export default observer(function LagjjaList() {
  const [target, setTarget] = useState("");

  function handleLagjeDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    lagjjaId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteLagje(lagjjaId);
  }

  const { lagjjaStore } = useStore();
  const { deleteLagje, lagjet, loading } = lagjjaStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
  
          <Link to="/createLagje" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">lagjja</TableCell>
          <TableCell className="tableCell">Qyteti</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {lagjet.map((lagjja) => (
            <TableRow key={lagjja.lagjjaId}>
              <TableCell className="tableCell">{lagjja.lagjjaId}</TableCell>

              <TableCell className="tableCell">{lagjja.emri}</TableCell>
              <TableCell className="tableCell">{lagjja.qytetiId}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/lagjja/${lagjja.lagjjaId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={lagjja.lagjjaId}
                  loading={loading && target === lagjja.lagjjaId}
                  onClick={() => deleteLagje(lagjja.lagjjaId)}
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
