import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import KafshetList from "./KafshetList";

export default observer(function KafshetDashboard() {
  const { kafshetStore } = useStore();
  const { loadKafshett, kafshetRegistry } = kafshetStore;

  useEffect(() => {
    if (kafshetRegistry.size <= 1) loadKafshett();
  }, [kafshetRegistry.size, loadKafshett]);

  if (kafshetStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <KafshetList />
      </Grid.Column>
    </Grid>
  );
});
