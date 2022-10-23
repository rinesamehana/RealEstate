import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import RoliDashboard from "../../components/adminpage/roli/dashboard/RoliDashboard";

function RoliAPI() {
  const { roliStore } = useStore();

  useEffect(() => {
    roliStore.loadRolet();
  }, [roliStore]);

  if (roliStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <RoliDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(RoliAPI);
