/* eslint-disable jsx-a11y/alt-text */

import Navbar from "../../components/navbar/Navbar";
import { Button } from "semantic-ui-react";
import { BsHeart } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";


export default observer(function Houses() {
  const { shtepiaStore } = useStore();
  const { userStore, modalStore } = useStore();
  const { n6Shtepiav, loadShtepite } = shtepiaStore;

  const [query, setQuery]=useState(""); 

  const keys=["cmimi","titulli", "lokacioni"];

  useEffect(() => {

    loadShtepite();
 
}, [loadShtepite]);
      
   

 
  return (
    <>
 
  

     
    <div className="wrapper-houses">
   
      {n6Shtepiav.filter((shtepia:any)=> keys.some((key)=>shtepia[key].toLowerCase().includes(query))).map((shtepia) => {
        return (
          
          <div key={shtepia.shtepiaId}>
            <div className="lists1">
              <div className="list1">
                <div className="home1">
                  <div className="image1">
                 <Link to={`/houses/${shtepia.shtepiaId}`}>
                    <img src={shtepia.photo}/>
                    </Link>
                    <div className="button_Add1">
                      <Button>
                        <BsHeart
                          style={{
                            color: "rgb(53, 51, 51)",
                            fontSize: "40px",
                          }}
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="details1">
                    <div className="details_first1">
                      <div className="green_box1"></div>For Rent{" "}
                      {shtepia.titulli}
                    </div>
                    <div className="details_second1">
                      <h4>${shtepia.cmimi}</h4>
                    </div>
                    <div className="details_3thd1">
                      {" "}
                      <span>{shtepia.nrDhomave}</span> bed <span>{shtepia.nrBanjove}</span> bath <span>{shtepia.siperfaqja}</span>{" "}
                      sqf
                    </div>
                    <div className="details_4rth1">
                    <div className="location1">
                        {/* {shtepia.lagjjaId} */}
                        {shtepia.lokacioni}
                        {/* 323-329 Centre St Unit 201
                        <br /> Jamaica Plaim */}
                      </div>
                      <div className="buttonn1">
                        <Button type="submit" content="Book Now" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div></>
  );
});
