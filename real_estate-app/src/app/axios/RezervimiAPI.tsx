import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import PamjaDashboard from "../../components/adminpage/pamja/dashboard/PamjaDashboard";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import RezervimiDashboard from "../../components/adminpage/rezervimi/dashboard/RezervimiDashboard";

function PamjaAPI() {
  const { pamjaStore } = useStore();

  useEffect(() => {
    pamjaStore.loadPamjet();
  }, [pamjaStore]);

  if (pamjaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
    
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <RezervimiDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(PamjaAPI);

