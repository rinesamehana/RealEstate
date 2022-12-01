import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../app/stores/store";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";

import Header from "../../components/header/Header";
import Houses from "../../components/houses/Houses";

import Navbar from "../../components/navbar/Navbar";

import Neighborhoods from "../../components/neighborhoods/Neighborhoods";
import Partners from "../../components/partners/Partners";

import PropertyList from "../../components/propertyList/PropertyList";
import List from "../list/List";

export default observer(function housepage() {
  return (
    <div>
      <Navbar />
      <List />
    </div>
  );
});
