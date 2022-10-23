import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import QytetiList from "./QytetiList";

export default observer(function AmbientiDashboard() {
  const { qytetiStore } = useStore();
  const { loadQytetet, qytetiRegistry } = qytetiStore;

  useEffect(() => {
    if (qytetiRegistry.size <= 1) loadQytetet();
  }, [qytetiRegistry.size, loadQytetet]);

  if (qytetiStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="14">
        <QytetiList />
      </Grid.Column>
    </Grid>
  );
});
