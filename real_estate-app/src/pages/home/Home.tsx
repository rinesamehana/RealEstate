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
import "./home.css";

export default observer(function Home() {
  const { userStore, modalStore } = useStore();
  return (
    <div>
      <Navbar />

      <Header type={undefined} />

      <div className="homeContainer">
        <Featured />
        <Neighborhoods />
        <PropertyList />
        <h1 className="homeTitle">Latest   Houses</h1>
        {userStore.isLoggedIn || !(userStore.isLoggedIn)}{
        <Houses />
        }
        <Partners />
        <Footer />
      </div>
    </div>
  );
});
