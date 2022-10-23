import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import PajisjaList from "./PajisjaList";

export default observer(function PajisjaDashboard() {
  const { pajisjaStore } = useStore();
  const { loadPajisjet, pajisjaRegistry } = pajisjaStore;

  useEffect(() => {
    if (pajisjaRegistry.size <= 1) loadPajisjet();
  }, [pajisjaRegistry.size, loadPajisjet]);

  if (pajisjaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <PajisjaList />
      </Grid.Column>
    </Grid>
  );
});
