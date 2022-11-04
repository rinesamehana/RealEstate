import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import { Button } from "semantic-ui-react";
import { BsHeart } from "react-icons/bs";
const List = () => {
  return (
    <div>
      <Navbar />

      <div className="container-list">
      <div className="search-box">
        fdgfgd
      </div>
      
      <div className="lists1">
        <div className="list1">
          <div className="home1">
            <div className="image1">
              <img src="https://ap.rdcpix.com/cf7538d7dac381b193d098558847159al-m3899297336od-w480_h360_x2.webp" />
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
                <div className="green_box1"></div>For Rent - Condo
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
                  323-329 Centre St Unit 201
                  <br /> Jamaica Plaim
                </div>
                <div className="buttonn1">
                  <Button type="submit" content="Book Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default List;
