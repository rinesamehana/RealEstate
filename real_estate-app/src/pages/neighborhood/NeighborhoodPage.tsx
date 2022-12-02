import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoadingComponent from "../../app/axios/LoadingComponent";

import { useStore } from "../../app/stores/store";
import Navbar from "../../components/navbar/Navbar";
import "./neighborhood.css";

export default observer(function NeighborhoodPage() {
  const history = useHistory();
  const { qytetiStore } = useStore();
  const { qytetet, loadQytetet } = qytetiStore;

  useEffect(() => {
    loadQytetet();
  }, [loadQytetet]);
  // if (qytetiStore.loadingInitial)
  // return <LoadingComponent content="Loading..." />;
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Our Towns</h1>
      </div>
      <div className="neighborhood">
        <div className="featuredd">
          {qytetet.map((qyteti) => {
            return (
              <div className="featureddItem" key={qyteti.qytetiId}>
                <img
                  src={qyteti.photo}
                  alt=""
                  className="featuredImg"
                />
                <div className="featureddTitles">
                  <h1 style={{ color: "white"}}>{qyteti.emri}</h1>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});
