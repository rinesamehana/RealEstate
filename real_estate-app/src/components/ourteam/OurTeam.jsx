import React,{Fragment} from "react";
import Navbar from "../navbar/Navbar";
import "./ourTeam.css"

import Footer from "../footer/Footer";




import "./ourTeam.css";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
import { red } from "@mui/material/colors";
import OurTeamHome from "./OurTeamHome";

const OurTeam = () => {
    return (
      
            <><div>
        <Navbar />
        <div className="photo-nav">
          <p>
            We make selling and buying homes
            <br />
            <span>seamless and richly-rewarding</span>
          </p>
        </div>
        <div class="section-contact">
          <div class="container2">
            <p>
              We established Bushari Real Estate in 2008 because we believed that
              Boston home buyers and sellers deserved a better real estate
              experience. We grew the company to 45 employees and agents, and
              completed more than $1 billion in transaction volume. We were ranked
              as the fastest growing private real estate firm in Massachusetts by
              "Inc. 5000" in 2017, and in 2018, we decided to continue our journey
              with Compass.
              <br />
              <br />
              For forward-thinking participants in Boston's flourishing fine
              residential real estate market, Bushari Real Estate celebrates the
              unequivocal satisfaction of our clients.
              <br />
              <br />
              With a strong ethical foundation and commitment to exceptional
              customer service, our team leverages our unparalleled connections,
              deep market experience, expert negotiating skills and proprietary
              marketing tools to make selling and buying homes exhilarating,
              seamless and richly-rewarding.
              <br />
              <br />
              Our Mission is to help everyone find their place in the world.
            </p>
          </div>
          <div className="about-image">
            <img src="https://www.bostonrealestate.com/media/bushari/images/staticpage/about-sub-bg.jpg" />
          </div>
          <div className="section-contact">
            <div class="container2">
              <h1>Relocation Services</h1>
              <p>
                Our team believes that moving shouldn't be stressful, it should be
                exciting and refreshing. Whether you are moving across the country
                or across the street, our experienced relocation team is there to
                make your transition smooth and seamless. Our strong business
                relationships with top professionals means that our clients get
                white-glove service. Whether you need your dishes packed,
                furniture stored, home cleaned or a new floor, we are here to make
                sure the job gets done.
                <br />
                <br />
                If you are an out-of-town buyer, we will pick you up from the
                airport or your hotel and guide you through Boston's many
                neighborhoods. We will be right beside you every step of the way
                and always work with your schedule because we understand your time
                is valuable. Bushari will research your specific criteria and set
                appointments to view only the best Boston has to offer. We will
                provide you with a detailed and organized showing schedule prior
                to your arrival for the most efficient use of your time.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="our-service">
            <div className="our-servic-text">
              <h1>Buyer Services</h1>
              <p>
                At Bushari, we see ourselves as stewards and partners to our
                clients. We are at our best when we serve as trusted, ethical
                advisors who know how to navigate the market, while remaining
                empathetic, nimble problem solvers who can handle the myriad of
                details that accompany each and every relationship. We are always
                ready to listen well, share ideas and roll up our sleeves.<br />{" "}
                <br />
                Our team of accomplished real estate professionals is comprised of
                agents who are knowledgeable market analysts, clear communicators,
                skilled negotiators, creative marketers and are fully dedicated to
                exceptional customer service. The agent you hire will skillfully
                guide you through the home buying process, from search to close
                and beyond.
              </p>
              <div className="button-service">
                <button>Learn More</button>
              </div>
            </div>{" "}
          </div>
        </div>

        <div class="container-conc">
          <div class="section-title-contact">
            <h1>Our Team</h1>
          </div>

          <div class="row-conc">

          <OurTeamHome/>
          </div>
        </div>
      </div>
    
      
      <Footer /></>







       
    );
  
};


export default OurTeam;




