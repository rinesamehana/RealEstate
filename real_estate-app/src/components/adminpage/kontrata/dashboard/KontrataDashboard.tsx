import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import KontrataList from "./KontrataList";

export default observer(function KontrataDashboard() {
  const { kontrataStore } = useStore();
  const { loadKontratat, kontrataRegistry } = kontrataStore;

  useEffect(() => {
    if (kontrataRegistry.size <= 1) loadKontratat();
  }, [kontrataRegistry.size, loadKontratat]);

  if (kontrataStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
  return (
    <Grid>
      <Grid.Column width="10">
        <KontrataList />
      </Grid.Column>
    </Grid>
  );
});
