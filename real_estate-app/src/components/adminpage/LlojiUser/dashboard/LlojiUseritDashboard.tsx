import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import LlojiUserStore from "../../../../app/stores/LlojiUserStore";

import { useStore } from "../../../../app/stores/store";
import LlojiUseritList from "./LlojiUseritList";

export default observer(function LlojiUseritDashboard() {
  const { llojiUserStore } = useStore();
  const { loadLlojiUserit, llojUseriRegistry } = llojiUserStore;

  useEffect(() => {
    if (llojUseriRegistry.size <= 1) loadLlojiUserit();
  }, [llojUseriRegistry.size, loadLlojiUserit]);

  if (LlojiUserStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <LlojiUseritList />
      </Grid.Column>
    </Grid>
  );
});
