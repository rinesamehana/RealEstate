import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import LlojiShtepiseList from "./LlojiShtepiseList";

export default observer(function LlojiShtepiseDashboard() {
  const { llojiShtepiseStore } = useStore();
  const { loadLlojetShtepive, llojishtepiseRegistry } = llojiShtepiseStore;

  useEffect(() => {
    if (llojishtepiseRegistry.size <= 1) loadLlojetShtepive();
  }, [llojishtepiseRegistry.size, loadLlojetShtepive]);

  if (llojiShtepiseStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <LlojiShtepiseList />
      </Grid.Column>
    </Grid>
  );
});
