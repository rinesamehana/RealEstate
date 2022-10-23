import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import KohaEPunesList from "./KohaEPunesList";
import AmbientiList from "./KohaEPunesList";

export default observer(function KohaPunesDashboard() {
  const { kohaPunesStore } = useStore();
  const { loadkohetePunes, kohaPunesRegistry } = kohaPunesStore;

  useEffect(() => {
    if (kohaPunesRegistry.size <= 1) loadkohetePunes();
  }, [kohaPunesRegistry.size, loadkohetePunes]);

  if (kohaPunesStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <KohaEPunesList />
      </Grid.Column>
    </Grid>
  );
});
