import React from "react";
import "./home1.scss";
import "../../../components/adminpage/widgets/widget.scss";
import Sidebar from "../../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../../components/adminpage/navbar/Navbar2";
import Widgets from "../../../components/adminpage/widgets/Widgets";
import Featured from "../../../components/adminpage/featured/featured";
import Chart from "../../../components/adminpage/chart/Chart";
import Table from "../../../components/adminpage/tables/Table";
const Dashboard = () => {
  return (
    <div className="homee">
      <Sidebar />
      <div className="homeContainerr">
        <Navbar />
        <div className="widgetss">
          <Widgets type="user" />
          <Widgets type="houses" />
          <Widgets type="bookings" />
          <Widgets type="earning" />
        </div>
        <div className="chartss">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainerr">
          <div className="listTitlee">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
