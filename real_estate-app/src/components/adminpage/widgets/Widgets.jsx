import React from "react";
import "./widget.scss";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = ({ type }) => {
  let data;

  //temporary

  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        amount:8,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(250, 90, 90, 0.8)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "houses":
      data = {
        title: "Houses",
        amount:12,
        isMoney: false,
        link: "See all houses",
        icon: (
          <MapsHomeWorkOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(130, 127, 127, 0.8)",
              color: "black",
            }}
          />
        ),
      };
      break;
    case "bookings":
      data = {
        title: "Bookings",
        isMoney: false,
        amount:5,
        link: "See all bookings",
        icon: (
          <EventNoteOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(130, 245, 105, 0.8)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Towns",
        amount:8,
        isMoney: false,
        link: "View Towns",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(128,0,128,0.2)", color: "purple" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
