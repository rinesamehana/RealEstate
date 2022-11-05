import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { useStore } from "../../../../app/stores/store";
import CSS from "csstype";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";

const CardStyles: CSS.Properties = {
  marginLeft: "50px",
  width: "50%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop: "50px",
  textAlign: "center",
  border: "2px solid gray",
};

const CRStyles: CSS.Properties = {
  fontSize: "18px",

  color: "black",
};
const CRdStyles: CSS.Properties = {
  flexDirection: "row",
  textAlign: "center",
  width: "400px",
};
export default observer(function LagjjaDetails() {
  const { lagjjaStore , qytetiStore} = useStore();

  const { selectedLagje: lagjja, loadLagje, loadingInitial } = lagjjaStore;
  const { qytetet, loadQytetet } = qytetiStore;
  const { lagjjaId } = useParams<{ lagjjaId: string }>();


  useEffect(() => {
    if (lagjjaId) loadLagje(lagjjaId);
  }, [lagjjaId, loadLagje]);
  useEffect(()=>{
    loadQytetet();
  },[loadQytetet])
  if (loadingInitial || !lagjja) return <LoadingComponent />;
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="card">
          <div className="newContainer">
            <div className="top">
              <h1>Edit</h1>
            </div>
            <Card fluid style={CardStyles}>
              <Card.Content style={CRStyles}>
                Lagjja: {lagjja.emri}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Qyteti: {lagjja.qytetiId}
              </Card.Content>
              <Card.Content>
                <Button.Group style={CRdStyles}>
                  <Button
                    inverted
                    as={Link}
                    to={`/manageLagje/${lagjja.lagjjaId}`}
                    color="blue"
                    content="Edit"
                    class="ui inverted blue button"
                  />
                  <Button
                    inverted
                    class="ui negative basic button"
                    as={Link}
                    to={`/lagjja`}
                    color="red"
                    content="Cancel"
                  />
                </Button.Group>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});
