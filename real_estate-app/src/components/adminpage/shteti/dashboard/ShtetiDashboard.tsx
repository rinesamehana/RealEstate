import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { useStore } from "../../../../app/stores/store";
import ShtetiList from "./ShtetiList";

export default observer(function ShtetiDashboard() {
  const { shtetiStore } = useStore();
  const { loadShtetet , shtetiRegistry } = shtetiStore;

  useEffect(() => {
    if (shtetiRegistry.size <= 1) loadShtetet();
  }, [shtetiRegistry.size, loadShtetet]);

  if (shtetiStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <ShtetiList />
      </Grid.Column>
    </Grid>
  );
});
