import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../app/stores/store";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";

import Header from "../../components/header/Header";
import Houses from "../../components/houses/Houses";
import HousesThree from "../../components/houses/HousesThree";

import Navbar from "../../components/navbar/Navbar";
import "./house.css";
import Neighborhoods from "../../components/neighborhoods/Neighborhoods";
import Partners from "../../components/partners/Partners";


import HouseId from "./HouseId";
import ShtepiaIdTest from "./ShtepiaIdTest";
import { useParams } from "react-router-dom";
import Contact from "../../components/contact/contact";
import ContactHouse from "./ContactHouse";
import { flexbox } from "@mui/system";
export default observer(function Home() {
    const{shtepiaStore}=useStore();

  const { shtepiaId } = useParams<{ shtepiaId: string }>();
  const { userStore, modalStore } = useStore();
  return (
   
      <><>
          <HouseId />
          <div className="Space1">
              <div className="Space">
                  <div className="latest-houses" >
                      <h2 className="homeTitle-id" style={{ marginBottom: "15px" }}>
                          Latest Houses
                      </h2>
                  </div>
                  {userStore.isLoggedIn || !userStore.isLoggedIn}
                  {<HousesThree />}

                  <div className="reviews-contact">
                      <div className="review-contact" style={{ marginTop: "15px", display: "flex", gap: "30px" }}>
                          <ShtepiaIdTest shtepiaId={shtepiaId} />
                          <ContactHouse /></div>
                  </div>

              </div>

          </div></><Footer /></>



  );
});