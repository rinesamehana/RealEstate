import "./house.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import Footer from "../../components/footer/Footer";

import { useEffect, useMemo, useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../app/axios/LoadingComponent";
import Houses from "../../components/houses/Houses";
import { FaBath } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { RiPriceTag3Line } from "react-icons/ri";
import React from "react";
import ShtepiaIdTest from "./ShtepiaIdTest";



export default observer(function HouseId() {
 
const{shtepiaStore}=useStore();
const { selectedShtepia: shtepia, loadShtepi,loadingInitial, loadShtepite } = shtepiaStore;
  const { shtepiaId } = useParams<{ shtepiaId: string }>();

  useEffect(() => {
   
    if (shtepiaId) loadShtepi(shtepiaId);
    loadShtepite();
  }, [shtepiaId, loadShtepi, loadShtepite]);
  if (loadingInitial || !shtepia) return <LoadingComponent />;
  const images = [
    { url: `${shtepia.photo}` },
    { url: `${shtepia.photo2}` },
    { url: `${shtepia.photo3}` },
    { url: `${shtepia.photo4}` },
    
  ];


  return (
    
    <div>
      <Navbar />
      <div className="Space1">
      <div className="Space">
      <div className="Slider1">
      <SimpleImageSlider
        width={700}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <div className="houseDetails">
            <div className="houseDetailsTexts">
              <h1 className="houseTitle">{shtepia.titulli}</h1>
              <p className="houseDesc">
                {shtepia.pershkrimi}
              </p>
              <button className="bookNow">Reserve or Book Now!</button>
            </div>
          </div>
    </div>
      <div className="houseContainer">
        <div className="houseWrapper">
          <h1 className="houseTitle">Tower Street Apartments</h1>
          <div className="houseDetailsPrice">
          <h1><strong> <RiPriceTag3Line /> $100.000 </strong></h1>
        </div>
           <ul className="list">
            <li><BiBed/> <strong> {shtepia.nrDhomave} </strong>beds</li>
            <li><FaBath/> <strong> {shtepia.nrBanjove} </strong>bath</li>
            <li> <strong>{shtepia.siperfaqja} </strong> m<sup>2</sup></li>
          </ul>
          <div className="next">
          <p><ImLocation/> 6818 S Benton Ave, Kansas City, MO 64132</p>
      </div>
       </div>
      </div>
      </div>
      </div>
<ShtepiaIdTest shtepiaId={shtepiaId}/>
      <Footer />
    </div>
  );
})


