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
import ShtepiaDashboard from "../../components/adminpage/shtepia/dashboard/ShtepiaDashboard";

function ShtepiaAPI() {
  const { shtepiaStore } = useStore();

  useEffect(() => {
    shtepiaStore.loadShtepite();
  }, [shtepiaStore]);

//   if (shtepiaStore.loadingInitial)
//     return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <ShtepiaDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(ShtepiaAPI);
