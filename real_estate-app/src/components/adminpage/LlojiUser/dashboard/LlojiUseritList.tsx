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

export default observer(function LlojiUseritList() {
  const [target, setTarget] = useState("");

  function handleLlojUserDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    llojiUserId: string
  ) {
    setTarget(e.currentTarget.name);
    deleteLlojUser(llojiUserId);
  }

  const { llojiUserStore } = useStore();
  const { deleteLlojUser, llojetUserit, loading } = llojiUserStore;
  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/createLlojiUser" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Lloji Userit</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {llojetUserit.map((llojiUser) => (
            <TableRow key={llojiUser.llojiUserId}>
              <TableCell className="tableCell">
                {llojiUser.llojiUserId}
              </TableCell>

              <TableCell className="tableCell">{llojiUser.lloji}</TableCell>
              <Table.Cell>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  inverted
                  as={Link}
                  to={`/llojiUser/${llojiUser.llojiUserId}`}
                  loading={loading}
                  class="ui inverted blue button"
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={llojiUser.llojiUserId}
                  loading={loading && target === llojiUser.llojiUserId}
                  onClick={() => deleteLlojUser(llojiUser.llojiUserId)}
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
