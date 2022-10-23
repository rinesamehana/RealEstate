import React, { useEffect, useState } from "react";
import { Button, Container } from "semantic-ui-react";

import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import ShtetiStore from "../stores/ShtetiStore";
import ShtetiDashboard from "../../components/adminpage/shteti/dashboard/ShtetiDashboard";

function ShtetetAPI() {
  const { shtetiStore } = useStore();

  useEffect(() => {
    shtetiStore.loadShtetet();
  }, [shtetiStore]);

  if (shtetiStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <ShtetiDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(ShtetetAPI);
