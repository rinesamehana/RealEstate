import { useEffect } from "react";

import { Container, Header } from "semantic-ui-react";

import LoadingComponent from "./LoadingComponent";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import KafshetDashboard from "../../components/adminpage/kafshet/dashboard/KafshetDashboard";

function KafshetAPI() {
  const { kafshetStore } = useStore();

  useEffect(() => {
    kafshetStore.loadKafshett();
  }, [kafshetStore]);

  // if (kafshetStore.loadingInitial)
  //   return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <KafshetDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(KafshetAPI);
