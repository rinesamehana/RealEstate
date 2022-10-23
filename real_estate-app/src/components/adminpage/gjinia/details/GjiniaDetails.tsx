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
export default observer(function GjiniaDetails() {
  const { gjiniaStore } = useStore();

  const { selectedGjinia: gjinia, loadGjini, loadingInitial } = gjiniaStore;
  const { gjiniaId } = useParams<{ gjiniaId: string }>();

  useEffect(() => {
    if (gjiniaId) loadGjini(gjiniaId);
  }, [gjiniaId, loadGjini]);

  if (loadingInitial || !gjinia) return <LoadingComponent />;
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
                Gender: {gjinia.lloji}
              </Card.Content>
              <Card.Content>
                <Button.Group style={CRdStyles}>
                  <Button
                    inverted
                    class="ui inverted blue button"
                    as={Link}
                    to={`/manage/${gjinia.gjiniaId}`}
                    color="blue"
                    content="Edit"
                  />
                  <Button
                    inverted
                    class="ui negative basic button"
                    as={Link}
                    to={`/gjinia`}
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
