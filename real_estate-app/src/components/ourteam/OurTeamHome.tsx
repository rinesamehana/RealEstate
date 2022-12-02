import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ourTeam.css";
import { useStore } from "../../app/stores/store";
import Navbar from "../navbar/Navbar";

import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
export default observer(function OurTeamHome() {
  const history = useHistory();
  const { stafiStore } = useStore();
  const { stafii, loadStafii } = stafiStore;

  useEffect(() => {
    loadStafii();
  }, [loadStafii]);

  return (
    <>

      
    
          {stafii.map((staf) => {
            return (
              <div className="column-conc">
                <div className="team-conc">
                  <div className="team-img">
                    <img src={staf.photo} alt="Team Image" />
                  </div>
                  <div className="team-content">
                    <h2>
                      {staf.emri} {staf.mbiemri}
                    </h2>
                    <h3>{staf.nrTelefonit}</h3>
                    <h4>{staf.email}</h4>
                    <p>{staf.adresa}</p>
                  </div>
                  <div className="team-social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="icon-facebook">
                      <TiSocialFacebookCircular
                        style={{
                          color: "white",
                          fontSize: "30px",
                          alignItems: "center",
                        }}
                      />
                    </a>

                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="icon">
                      <TiSocialTwitterCircular
                        target="_blank"
                        style={{
                          color: "white",
                          fontSize: "30px",
                          alignItems: "center",
                        }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="icon">
                      <TiSocialLinkedinCircular
                        target="_blank"
                        style={{
                          color: "white",
                          fontSize: "30px",
                          alignItems: "center",
                        }}
                      />
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="icon">
                      <TiSocialInstagram
                        style={{
                          color: "white",

                          fontSize: "30px",
                          alignItems: "center",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
     
    </>
  );
});
