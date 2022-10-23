import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import GjendjaDashboard from "../../components/adminpage/gjendja/dashboard/GjendjaDashboard";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";

function GjendjaAPI() {
  const { gjendjaStore } = useStore();

  useEffect(() => {
    gjendjaStore.loadGjendjet();
  }, [gjendjaStore]);

  if (gjendjaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;
    
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <GjendjaDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(GjendjaAPI);
