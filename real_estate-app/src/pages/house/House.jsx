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
import { useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1" },
  { url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1" },
  { url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1" },
  { url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1" },
  { url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1" },
  { url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1" },
];

const House = () => {
  

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
              <h1 className="houseTitle">Stay in the heart of City</h1>
              <p className="houseDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
              <button className="bookNow">Reserve or Book Now!</button>
            </div>
          </div>
    </div>
      <div className="houseContainer">
        <div className="houseWrapper">
          <h1 className="houseTitle">Tower Street Apartments</h1>
          <div className="details">
          <h1>$100.000</h1>
        </div>
           <ul className="list">
            <li> <strong> 3 </strong>beds</li>
            <li> <strong> 1 </strong>bath</li>
            <li> <strong>1,018 </strong> m2</li>
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
};

export default House;
