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
export default observer(function StafiDetails() {
  const { stafiStore } = useStore();

  const { selectedStafi: stafi, loadStafi, loadingInitial } = stafiStore;
  const { stafiId } = useParams<{ stafiId: string }>();

  useEffect(() => {
    if (stafiId) loadStafi(stafiId);
  }, [stafiId, loadStafi]);

  if (loadingInitial || !stafi) return <LoadingComponent />;
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
              <Card.Content style={CRStyles}>Emri: {stafi.emri}</Card.Content>
              <Card.Content style={CRStyles}>
                Mbiemri: {stafi.mbiemri}
              </Card.Content>
              <Card.Content style={CRStyles}>Email: {stafi.email}</Card.Content>
              <Card.Content style={CRStyles}>
                Phone Number: {stafi.nrTelefonit}
              </Card.Content>
              <Card.Content style={CRStyles}>Role: {stafi.roliId}</Card.Content>
              <Card.Content style={CRStyles}>
                TypeUser: {stafi.llojiUserId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Hours: {stafi.kohaId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Gender: {stafi.gjiniaId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                City: {stafi.qytetiId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Country: {stafi.shtetiId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Address: {stafi.adresa}
              </Card.Content>
              <Card.Content style={CRStyles}>
                <Button.Group style={CRdStyles}>
                  <Button
                    inverted
                    class="ui inverted blue button"
                    as={Link}
                    to={`/manageStafi/${stafi.stafiId}`}
                    color="blue"
                    content="Edit"
                  />

                  <Button
                    inverted
                    class="ui negative basic button"
                    as={Link}
                    to={`/Stafi`}
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
