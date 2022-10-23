import React, { useEffect, useState } from "react";
import { Button, Container } from "semantic-ui-react";
import GjiniaDashboard from "../../components/adminpage/gjinia/dashboard/GjiniaDashboard";
import { Gjinia } from "../models/Gjinia";

import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

import Sidebar from "../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../components/adminpage/navbar/Navbar2";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function GjiniaAPI() {
  const { gjiniaStore } = useStore();

  useEffect(() => {
    gjiniaStore.loadGjinite();
  }, [gjiniaStore]);

  if (gjiniaStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Container style={{ marginTop: "3em" }}>
          <GjiniaDashboard />
        </Container>
      </div>
    </div>
  );
}
export default observer(GjiniaAPI);
