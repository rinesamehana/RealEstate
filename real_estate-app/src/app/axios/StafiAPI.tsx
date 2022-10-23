import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import StafiDashboard from "../../components/adminpage/stafi/dashboard/StafiDashboard";

function StafiAPI() {
  const { stafiStore } = useStore();

  useEffect(() => {
    stafiStore.loadStafii();
  }, [stafiStore]);

  //   if (stafiStore.loadingInitial)
  //     return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em", width: "1527px" }}>
          <StafiDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(StafiAPI);
