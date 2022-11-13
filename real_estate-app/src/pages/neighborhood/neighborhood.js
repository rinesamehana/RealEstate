import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./neighborhood.css";

const neighborhood = () =>  {

   return (
      <div>
     <Navbar/>
     <div className="neighborhood"> 
      <div className="title">
          <h1>Our Neighborhoods</h1>
          </div>
          <div className="featured">
            <div className="featuredItem">
           <img
            src="https://upload.terabitz.com/u/bushari/devlisting/0.407369001470669606.png"
            alt=""
            className="featuredImg"
           />
            <div className="featuredTitles">
            <h1>Reno</h1>
              <p>533 properties</p>
            </div>
         </div>
         <div className="featuredItem">
           <img
            src="https://upload.terabitz.com/u/bushari/devlisting/0.582430001485443021.png"
            alt=""
            className="featuredImg"
           />
            <div className="featuredTitles">
            <h1>Reno</h1>
              <p>123 properties</p>
            </div>
         </div>
         <div className="featuredItem">
           <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className="featuredImg"
           />
            <div className="featuredTitles">
            <h1>Reno</h1>
              <p>332 properties</p>
            </div>
         </div>
         </div>
         <div className="featured">
         <div className="featuredItem">
           <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImg"
           />
            <div className="featuredTitles">
            <h1>Reno</h1>
              <p>332 properties</p>
            </div>
         </div>
         <div className="featuredItem">
           <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImg"
           />
            <div className="featuredTitles">
            <h1>Reno</h1>
              <p>332 properties</p>
            </div>
         </div>
         <div className="featuredItem">
           <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className="featuredImg"
           />
            <div className="featuredTitles">
            <h1>Reno</h1>
              <p>332 properties</p>
            </div>
         </div>
         </div>
          </div>
      </div>
   );
    
}
export default neighborhood;
