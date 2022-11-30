import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";

import { AiOutlineStop } from "react-icons/ai";
import { GiWashingMachine, GiModernCity, GiField } from "react-icons/gi";
import { BiBuildingHouse } from "react-icons/bi";
import { MdGppGood,MdOutlinePayment } from "react-icons/md";
import { FaFileContract, FaSwimmingPool, FaCity } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { TbUserCheck, TbLiveView } from "react-icons/tb";
import { BsGenderFemale, BsHourglassSplit } from "react-icons/bs";
import { useStore } from "../../../app/stores/store";
const Sidebar = () => {
  const { userStore, modalStore } = useStore();
  const {
    userStore: { user, logout },
  } = useStore();
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Go to Homepage</span>
            </li>
          </Link>

          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/Stafi" style={{ textDecoration: "none" }}>
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Employees</span>
            </li>
          </Link>
          <Link to="/shtepia" style={{ textDecoration: "none" }}>
            <li>
              <OtherHousesOutlinedIcon className="icon" />
              <span>Houses</span>
            </li>
          </Link>
          <Link to="/rezervimi" style={{ textDecoration: "none" }}>
            <li>
              <EventAvailableIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>
          <p className="title">Useful for Users</p>
          <Link to="/gjinia" style={{ textDecoration: "none" }}>
            <li>
              <BsGenderFemale className="icon" />
              <span>Gender</span>
            </li>
          </Link>
          <Link to="/rolet" style={{ textDecoration: "none" }}>
            <li>
              <TbUserCheck className="icon" />
              <span>Role</span>
            </li>
          </Link>
          <Link to="/LlojiUser" style={{ textDecoration: "none" }}>
            <li>
              <TiBusinessCard className="icon" />
              <span>User Type</span>
            </li>
          </Link>
          <Link to="/KohaPunes" style={{ textDecoration: "none" }}>
            <li>
              <BsHourglassSplit className="icon" />
              <span>Working Hours</span>
            </li>
          </Link>
          <p className="title">Useful for House</p>

          <Link to="/pamja" style={{ textDecoration: "none" }}>
            <li>
              <TbLiveView className="icon" />
              <span>View</span>
            </li>
          </Link>
          <Link to="/kontrata" style={{ textDecoration: "none" }}>
            <li>
              <FaFileContract className="icon" />
              <span>Contract</span>
            </li>
          </Link>
          <Link to="/gjendja" style={{ textDecoration: "none" }}>
            <li>
              <MdGppGood className="icon" />
              <span>Condition</span>
            </li>
          </Link>

          <Link to="/LlojiShtepise" style={{ textDecoration: "none" }}>
            <li>
              <BiBuildingHouse className="icon" />
              <span>Type of house</span>
            </li>
          </Link>
          
          <Link to="/Pajisja" style={{ textDecoration: "none" }}>
            <li>
              <GiWashingMachine className="icon" />
              <span>The equipment</span>
            </li>
          </Link>
          <Link to="/ambienti" style={{ textDecoration: "none" }}>
            <li>
              <FaSwimmingPool className="icon" />
              <span>Outside Features</span>
            </li>
          </Link>
          <Link to="/MenyraPageses" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlinePayment className="icon" />
              <span>Payment Method</span>
            </li>
          </Link>
          <Link to="/kafshet" style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineStop className="icon" />
              <span>Allowed Animals</span>
            </li>
          </Link>

          <p className="title">Common</p>
          <Link to="/shteti" style={{ textDecoration: "none" }}>
            <li>
              <GiModernCity className="icon" />
              <span>Country</span>
            </li>
          </Link>
          <Link to="/qyteti" style={{ textDecoration: "none" }}>
            <li>
              <FaCity className="icon" />
              <span>Town</span>
            </li>
          </Link>
          <Link to="/Lagjja" style={{ textDecoration: "none" }}>
            <li>
              <GiField className="icon" />
              <span>Neighborhood</span>
            </li>
          </Link>

          <p className="title">Service</p>

          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>

          <li>
            <LogoutOutlinedIcon className="icon" />
            
            <span onClick={logout}>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
