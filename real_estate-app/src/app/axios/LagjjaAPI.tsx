import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import LagjjaDashboard from "../../components/adminpage/lagjja/dashboard/LagjjaDashboard";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";

function LagjjaAPI() {
  const { lagjjaStore } = useStore();

  useEffect(() => {
    lagjjaStore.loadLagjet();
  }, [lagjjaStore]);

  // if (lagjjaStore.loadingInitial)
  //   return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <LagjjaDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(LagjjaAPI);
