import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import MenyraPagesesList from "./MenyraPagesesList";

export default observer(function MenyraPagesesDashboard() {
  const { menyraPagesesStore } = useStore();
  const { loadMenyratPageses, menyraPagesesRegistry } = menyraPagesesStore;

  useEffect(() => {
    if (menyraPagesesRegistry.size <= 1) loadMenyratPageses();
  }, [menyraPagesesRegistry.size, loadMenyratPageses]);

  if (menyraPagesesStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <MenyraPagesesList />
      </Grid.Column>
    </Grid>
  );
});
