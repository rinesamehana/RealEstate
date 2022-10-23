import React from "react";
import "./partners.css";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners_title">
        <h1>Our Partner</h1>
      </div>
      <div className="images_partners">
        <div className="image_partner">
          <img src="https://www.losangelesrealestate.com/uploads/agent-1/ADfenix.webp" />
        </div>
        <div className="image_partner">
          <img src="https://www.losangelesrealestate.com/uploads/agent-1/Concierge_Auctions_.webp" />
        </div>
        <div className="image_partner">
          <img src="https://www.losangelesrealestate.com/uploads/agent-1/Inspirato_Real_Estate2.webp" />
        </div>
        <div className="image_partner">
          <img src="https://www.losangelesrealestate.com/uploads/agent-1/REW.webp" />
        </div>
        <div className="image_partner">
          <img src="https://www.losangelesrealestate.com/uploads/agent-1/Luxury_Listing_Specialist_LUXE.webp" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
