import "./propertyList.css";
import { Button } from "semantic-ui-react";
import CSS from "csstype";


const button: CSS.Properties = {
  fontSize: "16px",
  height: "auto",
  lineHeight: "1.42857",
  padding: "10px 24px",
  color:"rgb(255, 255, 255)",
  background:"black",
  borderRadius:"36px"
};
const PropertyList = () => {
  return (
    <div className="container">
      <div className="div-img-desc">
        <div className="div-img">
        <img src="https://static.rdc.moveaws.com/images/hero/hp-hero-mortgage-desktop.jpg"/>
        </div>
       <div className="div-desc">
        <h1>Need a home loan? Get pre-approved</h1>
        <p>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</p>
        <Button type='button' style={button} content="Get pre-approved now" ></Button>
       </div>

      </div>
    </div>
  );
};

export default PropertyList;