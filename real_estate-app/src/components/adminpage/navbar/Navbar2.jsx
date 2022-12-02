import React from "react";
import "./Navbar2.scss";
import { useStore } from "../../../app/stores/store";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Button, Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { userStore, modalStore } = useStore();
  const {
    userStore: { user, logout },
  } = useStore();
  return (
    <div className="navbarr">
      <div className="wrapperr">
        <div className="searchh">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="itemss">
          <div className="itemm">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="itemm">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="itemm">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="itemm">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="itemm">
          <Dropdown pointing="top right" text={user?.displayName}>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          position="center"
                          as={Link}
                          to={`profiles/${user?.username}`}
                          text="My Profile"
                          icon="user"
                          
                        />
                        <Dropdown.Item>
                          <div className="header-button">
                            <Link to={"/dashboard"}>
                              <Button type="button" content="MY DASHBOARD" />
                            </Link>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={logout}
                          text="Logout"
                          icon="power"
                        />
                      </Dropdown.Menu>
                    </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
