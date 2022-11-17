import "./listhouse.css";
import React, { useState, useEffect } from "react";
import ButtonI from "./Button/Button";
import Navbar from "../../components/navbar/Navbar";




 const List =(props) => {
  const {favorites, handleFavorite} = props;
  


  return (
    <div>
        <Navbar />
    <div className="lists1">
         <div className="list1">
         <div className="home1">
      <h1>Initial list</h1>
      <ul>
        {favorites.map((item, i) => (
          <li key={i}>
             <div className="image1">
             <img src="https://ap.rdcpix.com/cf7538d7dac381b193d098558847159al-m3899297336od-w480_h360_x2.webp" />
            </div>
            <div className="details1">
            <div className="details_first1">
            <div className="green_box1"></div>For Rent - Condo
            </div>
            <div className="details_second1">
                <h4>${item.price}</h4>
              </div>
              <div className="details_3thd1">
                {" "}
                <span>{item.room}</span> <span>{item.bath}</span> <span>{item.sqf}</span> 
              </div>
              <div className="details_4rth1">
                <div className="location1">
                 {item.location}
                  <br /> {item.place}
                </div>
                <div className="buttonn1">
                  <ButtonI type="submit" content="Submit" onClick={() => {
                handleFavorite(item.id);
              }}  >{item.favorite === true ? "Remove" : "Add"}</ButtonI>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
        {/* <h1>favorite list</h1>
        <ul>
        {favorites.map(item =>
          item.favorite === true ? <li key={item.id}><div className="image1">
          <img src="https://ap.rdcpix.com/cf7538d7dac381b193d098558847159al-m3899297336od-w480_h360_x2.webp" />
         </div>
         <div className="details1">
         <div className="details_first1">
         <div className="green_box1"></div>For Rent - Condo
         </div>
         <div className="details_second1">
             <h4>${item.price}</h4>
           </div>
           <div className="details_3thd1">
             {" "}
             <span>{item.room}</span> <span>{item.bath}</span> <span>{item.sqf}</span> 
           </div>
           <div className="details_4rth1">
             <div className="location1">
              {item.location}
               <br /> {item.place}
             </div>
             <div className="buttonn1">
               <ButtonI type="submit" content="Submit" onClick={() => {
             handleFavorite(item.id);
           }}  >{item.favorite === true ? "Remove" : "Add"}</ButtonI>
             </div>
           </div>
         </div>
        </li> : null
        )}
      </ul> */}
      </div>
      </div>
    </div>
  );
}
export default List;