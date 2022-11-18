import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";
// import "./houses.scss";
import { Button } from "semantic-ui-react";
import "./houses.scss";
import Navbar from "../../components/navbar/Navbar";

import { BsHeart } from "react-icons/bs";
const Houses = () => {
  const [isClick, setClick] = useState(false);
  return (
    <div className="wrapper1"> 
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Take your boring salads up "
      />

      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Take your boring salads up "
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Take your boring salads up "
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Take your boring salads up "
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Take your boring salads up "
      />

      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />
    </div> 
  );
};

function Card(props: any) {
  return (
    <div className="flex">

   
    <div className="lists1">
          <div className="home1">
            <div className="image1">
              <img src={props.img} />
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
                <div className="green_box1"></div>For Rent {props.title}
              </div>
              <div className="details_second1">
                <h4>$2500</h4>
              </div>
              <div className="details_3thd1">
                {" "}
                <span>1</span> bed <span>1</span> bath <span>729</span> sqf
              </div>
              <div className="details_4rth1">
                <div className="location1">
                {props.description}
                  <br />
                </div>
                <div className="buttonn1">
                  <Button type="submit" content="Book" />
                </div>
              </div>
            </div>
        </div>
      </div>   </div>);
}

export default Houses;
