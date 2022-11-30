import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Button, Menu, Image, Dropdown, Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";
import HeaderButton from "./HeaderButton";
import "./navbar.css";

export default observer(function Navbar() {
  const { userStore, modalStore } = useStore();
  const {
    userStore: { user, logout },
  } = useStore();
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="header-logo">
        <Link to="/" className="link" >
          <img
            src="https://www.bostonrealestate.com/media/bushari/images/common/logo.png"
            className="logo"
          />
          </Link>
        </div>
        <div className="header-container">
          <nav className="nav">
            <div className="header-top">
            <HeaderButton></HeaderButton>
              <div className="info">
              </div>{""}
              <div className="header-button">
                {userStore.isLoggedIn ? (
                  <Menu.Item position="left">
                    <Image
                    
                      src={
                        user?.image ||
                        "https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg"
                      }
                      avatar
                      spaced="right"
                    />
                    <Dropdown pointing="top right" text={user?.displayName}>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          position="bottom"
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
                  </Menu.Item>
                ) : (
                  <>
                    <Link to={"/login"}>
                      <Button
                        // onClick={() => modalStore.openModal(<LoginForm />)}
                        type="button"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to={"/register"}>
                      <Button
                        // onClick={() => modalStore.openModal(<RegisterForm />)}
                        type="button"
                        content="Register"
                      />
                    </Link>
                  </>
                )}
              </div>{" "}
            </div>

            <ul>
              <Link to="/houses" className="link" style={{"color":"black"}}>
                <li>HOUSES</li>
              </Link>
              <Link to="/towns" className="link" style={{"color":"black"}}>
              <li>TOWNS</li>
              </Link>
              <Link to="/teams" className="link" style={{"color":"black"}}>
              <li>OUR TEAM</li>
              </Link>
              <Link to="/contactus" className="link" style={{"color":"black"}}>
              <li>CONTACT US</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
});
