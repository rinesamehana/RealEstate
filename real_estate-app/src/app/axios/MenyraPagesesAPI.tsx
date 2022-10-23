import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import AmbientiDashboard from "../../components/adminpage/ambienti/dashboard/AmbientiDashboard";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import MenyraPagesesDashboard from "../../components/adminpage/menyraPageses/dashboard/MenyraPagesesDashboard";

function MenyraPagesesAPI() {
  const { menyraPagesesStore } = useStore();

  useEffect(() => {
    menyraPagesesStore.loadMenyratPageses();
  }, [menyraPagesesStore]);

  if (menyraPagesesStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <MenyraPagesesDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(MenyraPagesesAPI);
