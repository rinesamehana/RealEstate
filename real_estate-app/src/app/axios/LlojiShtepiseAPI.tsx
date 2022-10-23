import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import LlojiShtepiseDashboard from "../../components/adminpage/llojiShtepise/dashboard/LlojiShtepiseDashboard";

function LlojiShtepiseAPI() {
  const { llojiShtepiseStore } = useStore();

  useEffect(() => {
    llojiShtepiseStore.loadLlojetShtepive();
  }, [llojiShtepiseStore]);

  if (llojiShtepiseStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <LlojiShtepiseDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(LlojiShtepiseAPI);
