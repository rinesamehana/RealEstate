import React from "react";
import "./neighborhoods.css";
import { Link } from "react-router-dom";

const neighborhoods = () => {
  return (
    <div className="neighborhoods">
      <div className="title">
        <p>Neighborhoods</p>
      </div>

      <div className="featuredd">
        <div className="featuredItemm">
          <img
            src="https://upload.terabitz.com/u/bushari/devlisting/0.407369001470669606.png"
            alt=""
            className="featuredImgg"
          />
          <div className="featuredTitless">
          <h1>Reno</h1>
            <p>533 properties</p>
          </div>
        </div>

        <div className="featuredItemm">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImgg"
          />
          <div className="featuredTitless">
            <h1>Reno</h1>
            <p>533 properties</p>
          </div>
        </div>

        <div className="featuredItemm">
          <img
            src="https://upload.terabitz.com/u/bushari/devlisting/0.582430001485443021.png"
            alt=""
            className="featuredImgg"
          />
          <div className="featuredTitless">
          <h1>Reno</h1>
            <p>533 properties</p>
          </div>
        </div>
      </div>
      <div className="featuredd">
        <div className="featuredItemm">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImgg"
          />
          <div className="featuredTitless">
          <h1>Reno</h1>
            <p>533 properties</p>
          </div>
        </div>

        <div className="featuredItemm">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImgg"
          />
          <div className="featuredTitless">
          <h1>Reno</h1>
            <p>533 properties</p>
          </div>
        </div>

        <div className="featuredItemm">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className="featuredImgg"
          />
          <div className="featuredTitless">
          <h1>Reno</h1>
            <p>533 properties</p>
          </div>
        </div>
      </div>
      <Link to= "/neighborhood">
      <div className="seemore">
      <p>See others</p>
      </div>
    </Link>
    </div>
  );
};

export default neighborhoods;
