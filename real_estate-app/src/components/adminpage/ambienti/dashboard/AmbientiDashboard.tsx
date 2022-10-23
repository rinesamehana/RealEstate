import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import AmbientiList from "./AmbientiList";

export default observer(function AmbientiDashboard() {
  const { ambientiStore } = useStore();
  const { loadAmbientet, ambientiRegistry } = ambientiStore;

  useEffect(() => {
    if (ambientiRegistry.size <= 1) loadAmbientet();
  }, [ambientiRegistry.size, loadAmbientet]);

  if (ambientiStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <AmbientiList />
      </Grid.Column>
    </Grid>
  );
});
