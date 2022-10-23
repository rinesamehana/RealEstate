import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import LagjjaList from "./LagjjaList";

export default observer(function LagjjaDashboard() {
  const { lagjjaStore } = useStore();
  const { loadLagjet, lagjjaRegistry } = lagjjaStore;

  useEffect(() => {
    if (lagjjaRegistry.size <= 1) loadLagjet();
  }, [lagjjaRegistry.size, loadLagjet]);

  if (lagjjaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="16">
        <LagjjaList />
      </Grid.Column>
    </Grid>
  );
});
