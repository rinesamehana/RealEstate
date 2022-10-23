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
import { Shteti } from "../../../../app/models/Shteti";
import { useStore } from "../../../../app/stores/store";

export default observer(function ShtetiList() {
  const [target, setTarget] = useState("");

  function handleShtetDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    shtetiId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteShtet(shtetiId);
  }

  const { shtetiStore } = useStore();
  const { deleteShtet, shtetet, loading } = shtetiStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New Shtet
          <Link to="/createShtet" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Shteti</TableCell>
          <TableCell className="tableCell">Shkurtesa</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {shtetet.map((shteti) => (
            <TableRow key={shteti.shtetiId}>
              <TableCell className="tableCell">{shteti.shtetiId}</TableCell>

              <TableCell className="tableCell">{shteti.emri}</TableCell>
              <TableCell className="tableCell">{shteti.shkurtesa}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/shteti/${shteti.shtetiId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={shteti.shtetiId}
                  loading={loading && target === shteti.shtetiId}
                  onClick={() => deleteShtet(shteti.shtetiId)}
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
