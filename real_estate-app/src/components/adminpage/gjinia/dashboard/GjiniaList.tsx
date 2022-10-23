import { Item, Segment, Button, Table } from "semantic-ui-react";
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

const cols = [
  { field: "gjiniaId", headerName: "Id", width: 200 },
  { field: "lloji", headerName: "Gjinia", width: 200 },
];

export default observer(function GjiniaList() {
  const [target, setTarget] = useState("");
  const { gjiniaStore } = useStore();
  const { deleteGjini, gjinite, loading } = gjiniaStore;
  const [gjinitee, setGjinitee] = useState([]);
  const rowData = gjinite?.map((gjinia) => {
    return {
      gjiniaId: gjinia?.gjiniaId,
      lloji: gjinia?.lloji,
    };
  });
  const [data, setData] = useState(rowData);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: Gjinia) => {
        return (
          <>
            {gjinite.map((gjinia) => (
              <>
                <Button
                  // onClick={() => gjiniaStore.selectGjini(gjinia.gjiniaId)}
                  as={Link}
                  to={`/gjinia/${gjinia.gjiniaId}`}
                  loading={loading}
                  basic
                  color="blue"
                  content="Edit"
                ></Button>
                <Button
                  inverted
                  class="ui negative basic button"
                  name={gjinia.gjiniaId}
                  loading={loading && target === gjinia.gjiniaId}
                  onClick={() => deleteGjini(gjinia.gjiniaId)}
                  content="Delete"
                  color="red"
                ></Button>
              </>
            ))}
            ,
          </>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        checkboxSelection
        autoHeight
        pageSize={10}
        rowsPerPageOptions={[10]}
        pagination
        {...actionColumn}
        rows={rowData}
        getRowId={(rowData) => rowData.gjiniaId}
        columns={cols.concat(actionColumn)}
        arial-label="gjinia-table"
      />
    </div>
  );
});
