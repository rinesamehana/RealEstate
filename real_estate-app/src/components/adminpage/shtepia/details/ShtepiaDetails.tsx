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
export default observer(function ShtepiaDetails() {
  const { shtepiaStore } = useStore();

  const {
    selectedShtepia: shtepia,
    loadShtepi,
    loadingInitial,
  } = shtepiaStore;
  const { shtepiaId } = useParams<{ shtepiaId: string }>();

  useEffect(() => {
    if (shtepiaId) loadShtepi(shtepiaId);
  }, [shtepiaId, loadShtepi]);

  if (loadingInitial || !shtepia) return <LoadingComponent />;
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
                Title: {shtepia.titulli}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Photo: {shtepia.photourl}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Price: {shtepia.cmimi}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Location: {shtepia.lokacioni}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Number of Rooms: {shtepia.nrDhomave}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Number of Baths: {shtepia.nrBanjove}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Areas: {shtepia.siperfaqja}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Description: {shtepia.pershkrimi}
              </Card.Content>
              <Card.Content style={CRStyles}>
              Neighborhood: {shtepia.lagjjaId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Type of House: {shtepia.llojiShtepiseId}
              </Card.Content>
              <Card.Content style={CRStyles}>
               Conditions: {shtepia.gjendjaShtepiseId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                View: {shtepia.pamjaId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Animal: {shtepia.kafshetId}
              </Card.Content>
              <Card.Content style={CRStyles}>
                Staff: {shtepia.stafiId}
              </Card.Content>

              <Card.Content>
                <Button.Group style={CRdStyles}>
                  <Button
                    inverted
                    class="ui inverted blue button"
                    as={Link}
                    to={`/manageShtepi/${shtepia.shtepiaId}`}
                    color="blue"
                    content="Edit"
                  />
                  <Button
                    inverted
                    class="ui negative basic button"
                    as={Link}
                    to={`/shtepia`}
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
