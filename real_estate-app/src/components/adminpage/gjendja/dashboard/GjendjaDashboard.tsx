import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import GjendjaList from "./GjendjaList";

export default observer(function GjendjaDashboard() {
  const { gjendjaStore } = useStore();
  const { loadGjendjet, gjendjaRegistry } = gjendjaStore;

  useEffect(() => {
    if (gjendjaRegistry.size <= 1) loadGjendjet();
  }, [gjendjaRegistry.size, loadGjendjet]);

  if (gjendjaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <GjendjaList />
      </Grid.Column>
    </Grid>
  );
});
