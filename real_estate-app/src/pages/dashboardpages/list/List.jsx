import "./list.scss";
import Sidebar from "../../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../../components/adminpage/navbar/Navbar2";
import Datatable from "../../../components/adminpage/datatable/Datatable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
