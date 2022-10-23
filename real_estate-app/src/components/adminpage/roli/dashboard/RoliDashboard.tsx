import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import RoliList from "./RoliList";

export default observer(function RoliDashboard() {
  const { roliStore } = useStore();
  const { loadRolet, roliRegistry } = roliStore;

  useEffect(() => {
    if (roliRegistry.size <= 1) loadRolet();
  }, [roliRegistry.size, loadRolet]);

  if (roliStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <RoliList />
      </Grid.Column>
    </Grid>
  );
});
