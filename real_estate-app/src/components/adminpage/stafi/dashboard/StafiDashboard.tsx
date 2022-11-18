import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import StafiList from "./StafiList";

export default observer(function StafiDashboard() {
  const { stafiStore } = useStore();
  const { loadStafii, stafiRegistry } = stafiStore;

  useEffect(() => {
    if (stafiRegistry.size <= 1) loadStafii();
  }, [stafiRegistry.size, loadStafii]);

  if (stafiStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="14">
        <StafiList />
      </Grid.Column>
    </Grid>
  );
});
