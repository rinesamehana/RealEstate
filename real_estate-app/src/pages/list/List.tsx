import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import { Button } from "semantic-ui-react";
import { BsHeart } from "react-icons/bs";
import { useHistory } from "react-router";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect } from "react";

export default observer(function List() {
  const history = useHistory();
  const { shtepiaStore } = useStore();
  const { shtepiat, loadShtepite } = shtepiaStore;

  useEffect(() => {
    loadShtepite();
  }, [loadShtepite]);

  return (
    <>
    <Navbar />
    <div className="wrapper1">
      {shtepiat.map((shtepia) => {
        return (
          <div key={shtepia.shtepiaId}>
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
                      <div className="green_box1"></div>For Rent{" "}
                      {shtepia.titulli}
                    </div>
                    <div className="details_second1">
                      <h4>${shtepia.cmimi}</h4>
                    </div>
                    <div className="details_3thd1">
                      {" "}
                      <span>{shtepia.nrBanjove}</span> bed <span>1</span> bath <span>729</span>{" "}
                      sqf
                    </div>
                    <div className="details_4rth1">
                    <div className="location1">
                        {shtepia.lagjjaId}
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
          </div>
        );
      })}
    </div></>
  );
});
