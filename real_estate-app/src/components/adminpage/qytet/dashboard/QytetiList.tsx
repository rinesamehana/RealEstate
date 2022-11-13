import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Item, Segment, Table } from "semantic-ui-react";

import { useStore } from "../../../../app/stores/store";
import CSS from "csstype";
const TableCelll: CSS.Properties = {
  width: "260px",
};
const Tablee: CSS.Properties = {
  width: "102.5%!important",
};
export default observer(function QytetiList() {
  const [target, setTarget] = useState("");

  function handleQytetDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    qytetiId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteQytet(qytetiId);
  }

  const { qytetiStore, shtetiStore } = useStore();
  const { deleteQytet, qytetet, loading } = qytetiStore;
  const { selectedShteti: shteti, loadShtet } = shtetiStore;
  const { shtetiId } = useParams<{ shtetiId: string }>();
  useEffect(() => {
    if (shtetiId) loadShtet(shtetiId);
  }, [shtetiId, loadShtet]);
 


  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createQytet" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table style={Tablee} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell style={TableCelll} className="tableCell">
            ID
          </TableCell>
          <TableCell className="tableCell">Emri</TableCell>
          <TableCell className="tableCell">KodiPostar</TableCell>
          <TableCell className="tableCell">Shteti</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {qytetet.map((qyteti) => (
            <TableRow key={qyteti.qytetiId}>
              <TableCell className="tableCell">{qyteti.qytetiId}</TableCell>

              <TableCell className="tableCell">{qyteti.emri}</TableCell>
              <TableCell className="tableCell">{qyteti.kodiPostar}</TableCell>
              <TableCell className="tableCell" >{qyteti.shtetiId}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/qyteti/${qyteti.qytetiId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={qyteti.qytetiId}
                  loading={loading && target === qyteti.qytetiId}
                  onClick={() => deleteQytet(qyteti.qytetiId)}
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
