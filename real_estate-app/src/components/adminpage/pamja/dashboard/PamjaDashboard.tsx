import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import PamjaList from "./PamjaList";

export default observer(function PamjeDashboard() {
  const { pamjaStore } = useStore();
  const { loadPamjet, pamjaRegistry } = pamjaStore;

  useEffect(() => {
    if (pamjaRegistry.size <= 1) loadPamjet();
  }, [pamjaRegistry.size, loadPamjet]);

  if (pamjaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <PamjaList />
      </Grid.Column>
    </Grid>
  );
});
