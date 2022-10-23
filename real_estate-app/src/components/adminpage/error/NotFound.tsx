import React from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Header, Icon, Segment } from "semantic-ui-react";
import CSS from "csstype";

const error: CSS.Properties = {
  flexDirection: "row",
  textAlign: "center",
  alignItems: "center",
};
const errorimg: CSS.Properties = {
  width: "800px",
  height: "100%",
};
export default function NotFound() {
  return (
    <div className="f" style={error}>
      <img
        style={errorimg}
        src="https://stories.freepiklabs.com/storage/26832/oops-404-error-with-a-broken-robot-rafiki-2849.png"
      />

      {/* <Link to="/">
        <Button variant="light">Go Back</Button>
      </Link> */}
    </div>
  );
}
