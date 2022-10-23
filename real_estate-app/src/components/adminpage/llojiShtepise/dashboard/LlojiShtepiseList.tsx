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
import { LlojiShtepise } from "../../../../app/models/LlojiShtepise";
import { useStore } from "../../../../app/stores/store";

export default observer(function LlojiShtepiseList() {
  const [target, setTarget] = useState("");

  function handleLlojShtepieDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    llojiShtepiseId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteLlojShtepie(llojiShtepiseId);
  }

  const { llojiShtepiseStore } = useStore();
  const { deleteLlojShtepie, llojeteshtepive, loading } = llojiShtepiseStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createLlojShtepie" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">llojishtepise</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {llojeteshtepive.map((llojishtepise) => (
            <TableRow key={llojishtepise.llojiShtepiseId}>
              <TableCell className="tableCell">
                {llojishtepise.llojiShtepiseId}
              </TableCell>

              <TableCell className="tableCell">
                {llojishtepise.llojiiShtepise}
              </TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/llojishtepise/${llojishtepise.llojiShtepiseId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={llojishtepise.llojiShtepiseId}
                  loading={loading && target === llojishtepise.llojiShtepiseId}
                  onClick={() =>
                    deleteLlojShtepie(llojishtepise.llojiShtepiseId)
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
