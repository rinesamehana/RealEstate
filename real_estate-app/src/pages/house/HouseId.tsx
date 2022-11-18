import "./house.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../app/axios/LoadingComponent";



export default observer(function HouseId() {
 
const{shtepiaStore}=useStore();
const { selectedShtepia: shtepia, loadShtepi,loadingInitial } = shtepiaStore;
  const { shtepiaId } = useParams<{ shtepiaId: string }>();

  useEffect(() => {
    if (shtepiaId) loadShtepi(shtepiaId);
  }, [shtepiaId, loadShtepi]);
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
          <h1>$100.000</h1>
        </div>
           <ul className="list">
            <li> <strong> {shtepia.nrDhomave} </strong>beds</li>
            <li> <strong> {shtepia.nrBanjove} </strong>bath</li>
            <li> <strong>{shtepia.siperfaqja} </strong> m2</li>
          </ul>
          <div className="next">
          <p>6818 S Benton Ave, Kansas City, MO 64132</p>
      </div>
       </div>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
})


