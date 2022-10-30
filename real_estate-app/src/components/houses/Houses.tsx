import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import "./houses.scss";
import { Button } from "semantic-ui-react";

const Houses = () => {
  const [isClick, setClick] = useState(false);
  return (
    <div className="wrapper1">
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
            and only contains 5 ingredients!"
      />

      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />
      <Card
        img="https://th.bing.com/th/id/OIP.uOkJALzfYQ2g0tOZZ-ASugHaFj?pid=ImgDet&rs=1"
        title="Home"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
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
    <div className="card1">
      <div className="card__body1">
        <img src={props.img} className="card__image1" />
        <h2 className="card__title1">{props.title}</h2>
        <p className="card__description1">{props.description}</p>
      </div>
      <div className="card_buttons">
        <button className="card__btnn">Add to favourites</button>
        <button className="card__btn">Reserve</button>
      </div>
    </div>
  );
}

export default Houses;
