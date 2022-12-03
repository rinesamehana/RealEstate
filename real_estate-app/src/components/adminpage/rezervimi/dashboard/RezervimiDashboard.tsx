import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import RezervimiList from "./RezervimiList";


export default observer(function RezervimiDashboard() {
  const { rezervimiStore } = useStore();
  const { loadRezervimet, rezervimiRegistry } = rezervimiStore;

  useEffect(() => {
    if (rezervimiRegistry.size <= 1) loadRezervimet();
  }, [rezervimiRegistry.size, loadRezervimet]);

  if (rezervimiStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="16">
        <RezervimiList />
      </Grid.Column>
    </Grid>
  );
});
