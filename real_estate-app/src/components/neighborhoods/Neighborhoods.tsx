import React, { useEffect } from "react";
import "./neighborhoods.css";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import Navbar from "../navbar/Navbar";
import { observer } from "mobx-react-lite";
import CSS from "csstype";

const CardStyles: CSS.Properties = {
color:"white",
display:"flex",
background:"black",
float:"right",
justifyContent:"flex-end",
marginRight:"40px",
marginBottom:"60px",
fontSize: "40px",




  

};
export default observer(function Neighborhoods() {
  const history = useHistory();
  const { lagjjaStore } = useStore();
  const { n6Lagje, loadLagjet } = lagjjaStore;

  useEffect(() => {
    loadLagjet();
  }, [loadLagjet]);

  return (
    <>
 
      <div className="titlee">
        <h1 style={CardStyles}>Our Neighborhoods</h1>
      </div>
      <div className="neighborhoods">
        <div className="featuredd">
          {n6Lagje.map((lagjja) => {
            return (
              <div className="featuredItemm" key={lagjja.lagjjaId}>
                <img
                  src={lagjja.photo}
                  alt=""
                  className="featuredImg"
                />
                <div className="featureddTitles" >
                  <h1 style={{ color: "white"}}>{lagjja.emri}</h1>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});