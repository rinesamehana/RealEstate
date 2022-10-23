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
import { MenyraePageses } from "../../../../app/models/MenyraPageses";
import { useStore } from "../../../../app/stores/store";

export default observer(function MenyraPagesesList() {
  const [target, setTarget] = useState("");

  function handleMenyrePageseDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    menyraPagesesId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteMenyrPagese(menyraPagesesId);
  }

  const { menyraPagesesStore } = useStore();
  const { deleteMenyrPagese, menyratPageses, loading } = menyraPagesesStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createMenyrePagese" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">menyrapageses</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {menyratPageses.map((menyrapageses) => (
            <TableRow key={menyrapageses.menyraPagesesId}>
              <TableCell className="tableCell">
                {menyrapageses.menyraPagesesId}
              </TableCell>

              <TableCell className="tableCell">
                {menyrapageses.menyraePageses}
              </TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/menyrapageses/${menyrapageses.menyraPagesesId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={menyrapageses.menyraPagesesId}
                  loading={loading && target === menyrapageses.menyraPagesesId}
                  onClick={() =>
                    deleteMenyrPagese(menyrapageses.menyraPagesesId)
                  }
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
