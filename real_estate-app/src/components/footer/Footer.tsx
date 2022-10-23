import "./footer.css";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social_media">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="icon-facebook"
          >
            <TiSocialFacebookCircular
              style={{ color: "white", fontSize: "50px" }}
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank" className="icon">
            <TiSocialYoutubeCircular
              target="_blank"
              style={{ color: "white", fontSize: "50px" }}
            />
          </a>
          <a href="https://twitter.com/" target="_blank" className="icon">
            <TiSocialTwitterCircular
              target="_blank"
              style={{ color: "white", fontSize: "50px" }}
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="icon">
            <TiSocialLinkedinCircular
              target="_blank"
              style={{ color: "white", fontSize: "50px" }}
            />
          </a>

          <a href="https://www.instagram.com/" target="_blank" className="icon">
            <TiSocialInstagram style={{ color: "white", fontSize: "50px" }} />
          </a>
        </div>
        <div className="footer_links"></div>
      </div>
    </footer>
  );
};

export default Footer;
