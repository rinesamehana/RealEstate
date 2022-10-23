import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import QytetiDashboard from "../../components/adminpage/qytet/dashboard/QytetiDashboard";

function QytetiAPI() {
  const { qytetiStore } = useStore();

  useEffect(() => {
    qytetiStore.loadQytetet();
  }, [qytetiStore]);

  // if (qytetiStore.loadingInitial)
  //   return <LoadingComponent content="Loading..." />;
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <QytetiDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(QytetiAPI);
