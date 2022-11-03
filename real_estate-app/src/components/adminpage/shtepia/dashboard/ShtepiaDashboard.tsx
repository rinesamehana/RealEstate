import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import ShtepiaList from "./ShtepiaList";


export default observer(function ShtepiaDashboard() {
  const { shtepiaStore } = useStore();
  const { loadShtepite, shtepiaRegistry } = shtepiaStore;

  useEffect(() => {
    if (shtepiaRegistry.size <= 1) loadShtepite();
  }, [shtepiaRegistry.size, loadShtepite]);

  if (shtepiaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="16">
        <ShtepiaList />
      </Grid.Column>
    </Grid>
  );
});
