import { Grid, Table } from "semantic-ui-react";
import React, { useEffect } from "react";

// import GjiniaDetails from "../details/GjiniaDetails";
import GjiniteTable from "./GjiniteTable";
import { Gjinia } from "../../../../app/models/Gjinia";
import GjiniaForm from "../form/GjiniaForm";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import GjiniaDetails from "../details/GjiniaDetails";
import GjiniaList from "./GjiniaList";

//kjo osht kryesorja qe i mbledhh

export default observer(function GjiniaDashboard() {
  const { gjiniaStore } = useStore();
  const { loadGjinite, gjiniaRegistry } = gjiniaStore;

  useEffect(() => {
    if (gjiniaRegistry.size <= 1) loadGjinite();
  }, [gjiniaRegistry.size, loadGjinite]);
  if (gjiniaStore.loadingInitial) return <LoadingComponent />;
  return (
    <Grid>
      <Grid.Column width="10">
        <GjiniaList />
      </Grid.Column>
    </Grid>
  );
});
