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

export default observer(function KafshetList() {
  const [target, setTarget] = useState("");

  function handleKafshetDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    kafshetId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteKafshet(kafshetId);
  }

  const { kafshetStore } = useStore();
  const { deleteKafshet, kafshett, loading } = kafshetStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createKafshet" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Lejohen Kafshet</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {kafshett.map((kafshet) => (
            <TableRow key={kafshet.kafshetId}>
              <TableCell className="tableCell">{kafshet.kafshetId}</TableCell>

              <TableCell className="tableCell">
                {kafshet.lejohenKafshet}
              </TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/Kafshet/${kafshet.kafshetId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={kafshet.kafshetId}
                  loading={loading && target === kafshet.kafshetId}
                  onClick={() => deleteKafshet(kafshet.kafshetId)}
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
