import { Item, Segment, Button, Table, TableFooter } from "semantic-ui-react";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Gjinia } from "../../../../app/models/Gjinia";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { AgGridReact } from "ag-grid-react";
import PopUp from "./PopUp";
import GjiniaForm from "../form/GjiniaForm";
import { useStore } from "../../../../app/stores/store";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { observer } from "mobx-react-lite";
import TablePagination from "@material-ui/core/TablePagination";

const cols = [
  { field: "gjiniaId", headerName: "Id", width: 200 },
  { field: "lloji", headerName: "Gjinia", width: 200 },
];

export default observer(function GjiniteTable() {
  const [target, setTarget] = useState("");
  const { gjiniaStore } = useStore();
  const { deleteGjini, gjinite, loading } = gjiniaStore;
  const [gjinitee, setGjinitee] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch("http://localhost:5000/api/gjinia");
  //     const data = await res.json();
  //     setGjinitee(await data);
  //     console.log(data);
  //   } catch (error) {}
  // };

  const rowData = gjinite?.map((gjinia) => {
    return {
      gjiniaId: gjinia?.gjiniaId,
      lloji: gjinia?.lloji,
    };
  });

  // function handleGjiniaDelete(
  //   e: SyntheticEvent<HTMLButtonElement>,
  //   gjiniaId: string
  // ) {
  //   setTarget(e.currentTarget.name);
  //   deleteGjini(gjiniaId);
  // }

  // if (!gjinia) return <LoadingComponent />;
  // const onGridReady = (params: {
  //   api: { applyTransaction: (arg0: { add: any }) => void };
  // }) => {
  //   fetch("http://localhost:5000/api/gjinia")
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       console.log(resp);
  //       params.api.applyTransaction({ add: resp });
  //     });
  // };
  // if (!selectedGjini) return;

  return (
    <TableContainer className="table">
      <div className="datatable">
        <div className="datatableTitle">
      
          <Link to="/createGjini" className="link">
            Add New
          </Link>
        </div>
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Gjinia</TableCell>
          <TableCell className="tableCell">Test</TableCell>
          <TableCell className="tableCell"></TableCell>
        </TableRow>

        <TableBody>
          {gjinite.map((gjinia) => (
            <TableRow key={gjinia.gjiniaId}>
              <TableCell className="tableCell">{gjinia.gjiniaId}</TableCell>

              <TableCell className="tableCell">{gjinia.lloji}</TableCell>
              <TableCell className="tableCell">{gjinia.test}</TableCell>
              <Table.Cell>
                <Button
                  inverted
                  class="ui inverted blue button"
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  as={Link}
                  to={`/gjinia/${gjinia.gjiniaId}`}
                  loading={loading}
                  color="blue"
                  content="Edit"
                />
                <Button
                  inverted
                  class="ui negative basic button"
                  name={gjinia.gjiniaId}
                  loading={loading && target === gjinia.gjiniaId}
                  onClick={() => deleteGjini(gjinia.gjiniaId)}
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
