import { Button } from "semantic-ui-react";
import { BsHeart } from "react-icons/bs";
import React from "react";

const ButtonI =(props) => {
  return (
    <div className="button_Add1">
                <Button onClick={props.onClick}>
                  <BsHeart
                    style={{
                      color: "rgb(53, 51, 51)",
                      fontSize: "40px",
                    }}
                  />
                 {props.children} 
                </Button>
              </div>
  )
}
export default ButtonI;