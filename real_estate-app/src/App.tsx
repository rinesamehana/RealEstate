import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch,
  useLocation,
} from "react-router-dom";

import Dashboard from "./pages/dashboardpages/home/Home";
import {useState} from 'react';

import Gjiniaa from "./app/axios/GjiniaAPI";
import LlojUserAPI from "./app/axios/LlojUserAPI";

import GjiniaDetails from "./components/adminpage/gjinia/details/GjiniaDetails";

import ShtetetAPI from "./app/axios/ShtetetAPI";
import ShtetiDetails from "./components/adminpage/shteti/details/ShtetiDetails";
import ShtetiForm from "./components/adminpage/shteti/form/ShtetiForm";
import LlojiUseritDetails from "./components/adminpage/LlojiUser/details/LlojiUseritDetails";
import LlojiUseritForm from "./components/adminpage/LlojiUser/form/LlojiUseritForm";

import TestErrors from "./components/adminpage/error/TestErrors";
import NotFound from "./components/adminpage/error/NotFound";
import ServerError from "./components/adminpage/error/ServerError";
import LoginForm from "./components/users/LoginForm";
import GjiniaForm from "./components/adminpage/gjinia/form/GjiniaForm";

import { ToastContainer } from "react-toastify";

import Login from "./pages/dashboardpages/login/Login";
import AmbientiAPI from "./app/axios/AmbientiAPI";
import AmbientiForm from "./components/adminpage/ambienti/form/AmbientiForm";
import AmbientiDetails from "./components/adminpage/ambienti/details/AmbientiDetails";
import { observer } from "mobx-react-lite";

import GjendjaAPI from "./app/axios/GjendjaAPI";
import GjendjaDetails from "./components/adminpage/gjendja/details/GjendjaDetails";
import GjendjaForm from "./components/adminpage/gjendja/form/GjendjaForm";

import PamjaAPI from "./app/axios/PamjaAPI";
import PamjaDetails from "./components/adminpage/pamja/details/PamjaDetails";
import PamjaForm from "./components/adminpage/pamja/form/PamjaForm";

import PajisjaAPI from "./app/axios/PajisjaAPI";
import PajisjaDetails from "./components/adminpage/pajisja/details/PajisjaDetails";
import PajisjaForm from "./components/adminpage/pajisja/form/PajisjaForm";

import LagjjaAPI from "./app/axios/LagjjaAPI";
import LagjjaDetails from "./components/adminpage/lagjja/details/LagjjaDetails";
import LagjjaForm from "./components/adminpage/lagjja/form/LagjjaForm";

import StafiAPI from "./app/axios/StafiAPI";
import StafiDetails from "./components/adminpage/stafi/details/StafiDetails";
import StafiForm from "./components/adminpage/stafi/form/StafiForm";
import Home from "./pages/home/Home";
import House from "./pages/house/House";
import List from "./pages/list/List";
import { useStore } from "./app/stores/store";
import { useEffect } from "react";
import LoadingComponent from "./app/axios/LoadingComponent";
import ModalContainer from "./app/common/form1/modals/ModalContainer";
import RegisterForm from "./components/users/RegisterForm";
import KontrataAPI from "./app/axios/KontrataAPI";
import KontrataDetails from "./components/adminpage/kontrata/details/KontrataDetails";
import KontrataForm from "./components/adminpage/kontrata/form/KontrataForm";

import QytetiDetails from "./components/adminpage/qytet/details/QytetiDetails";
import QytetiForm from "./components/adminpage/qytet/form/QytetiForm";
import QytetiAPI from "./app/axios/QytetiAPI";

import RoliAPI from "./app/axios/RoliAPI";
import RoliDetails from "./components/adminpage/roli/details/RoliDetails";
import RoliForm from "./components/adminpage/roli/form/RoliForm";
import KafshetAPI from "./app/axios/KafshetAPI";
import KafshetDetails from "./components/adminpage/kafshet/details/KafshetDetails";
import KafshetForm from "./components/adminpage/kafshet/form/KafshetForm";
import MenyraPagesesAPI from "./app/axios/MenyraPagesesAPI";
import MenyraPagesesDetails from "./components/adminpage/menyraPageses/details/MenyraPagesesDetails";
import MenyraPagesesForm from "./components/adminpage/menyraPageses/form/MenyraPagesesForm";
import LlojiShtepiseAPI from "./app/axios/LlojiShtepiseAPI";
import LlojiShtepiseDetails from "./components/adminpage/llojiShtepise/details/LlojiShtepiseDetails";
import LlojiShtepiseForm from "./components/adminpage/llojiShtepise/form/LlojiShtepiseForm";
import KohaPunesAPI from "./app/axios/KohaPunesAPI";
import KohaPunesDetails from "./components/adminpage/kohaePunes/details/KohaPunesDetails";
import KohaPunesForm from "./components/adminpage/kohaePunes/form/KohaPunesForm";
import PrivateRoute from "./app/axios/PrivateRoute";
import HouseItem from "./pages/list/HouseItem";

// import Qytetet from "./app/axios/QytetetAPI";
// import Shtetet from "./app/axios/ShtetetAPI";
// import PamjAA from "./app/axios/PamjaAPI";


function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();
  
  const data : object[] = [
    {id: 1, 
      price: 2500 ,
       room: '1 bed' , 
       bath: '1 bath', 
       sqf: '729 sqf' , 
       location:'323-329 Centre St Unit 201', 
       place: 'Jamaica Plaim',   
       img: "https://ap.rdcpix.com/cf7538d7dac381b193d098558847159al-m3899297336od-w480_h360_x2.webp" 
      },
      {id: 2, 
        price: 2000 ,
         room: '1 bed' , 
         bath: '1 bath', 
         sqf: '729 sqf' , 
         location:'323-329 Centre St Unit 201', 
         place: 'Jamaica Plaim',   
         img: "https://ap.rdcpix.com/cf7538d7dac381b193d098558847159al-m3899297336od-w480_h360_x2.webp" 
        },
        {id: 3, 
          price: 1500 ,
           room: '1 bed' , 
           bath: '1 bath', 
           sqf: '729 sqf' , 
           location:'323-329 Centre St Unit 201', 
           place: 'Jamaica Plaim',   
           img: "https://ap.rdcpix.com/cf7538d7dac381b193d098558847159al-m3899297336od-w480_h360_x2.webp" 
          },
         
  ];
  

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);


  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(data);
  }, []);

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }


  if (!commonStore.appLoaded) return <LoadingComponent content="Loading..." />;

  return (
    <>
      <ToastContainer position="bottom-right" />

      <Switch>
        <Route path='/favorite'><HouseItem  favorites={favorites} handleFavorite={handleFavorite}/>  </Route>
        <Route exact path="/" component={Home} />
        <Route path="/houses/:id" component={House} />
        <Route path="/houses" >
          <List favorites={favorites} handleFavorite={handleFavorite} /> 
        </Route>
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/users" component={List} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route
          path={"/(gjinia|manage|createGjini|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/gjinia" component={Gjiniaa} />
              <PrivateRoute path="/gjinia/:id" component={GjiniaDetails} />
              <PrivateRoute
                key={location.key}
                path={["/manage/:id", "/createGjini"]}
                component={GjiniaForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
        
            </Switch>
          )}
        />
        <Route
          path={"/(kontrata|manage|createKontrata|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/kontrata" component={KontrataAPI} />
              <PrivateRoute path="/kontrata/:id" component={KontrataDetails} />
              <PrivateRoute
                key={location.key}
                path={["/createKontrata", "/manage/:id"]}
                component={KontrataForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
              <Route component={NotFound} />
            </Switch>
          )}
        />
        <Route
          path={"/(pamja|manage|createPamja|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/pamja" component={PamjaAPI} />
              <PrivateRoute path="/pamja/:pamjaId" component={PamjaDetails} />
              <PrivateRoute
                key={location.key}
                path={["/createPamja", "/manage/:pamjaId"]}
                component={PamjaForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
              <Route component={NotFound} />
            </Switch>
          )}
        />

        <Route exact path="/ambienti" component={AmbientiAPI} />

        <Route path="/ambienti/:ambientiId" component={AmbientiDetails} />
        <Route
          key={location.key}
          path={["/createAmbient", "/manage/:ambientiId"]}
          component={AmbientiForm}
        />

        <Route exact path="/llojiUser" component={LlojUserAPI} />

        <Route path="/llojiUser/:llojiUserId" component={LlojiUseritDetails} />
        <Route
          key={location.key}
          path={["/createLlojiUser", "/manage/:llojiUserId"]}
          component={LlojiUseritForm}
        />

        <Route exact path="/shteti" component={ShtetetAPI} />

        <Route path="/shteti/:shtetiId" component={ShtetiDetails} />
        <Route
          key={location.key}
          path={["/createShtet", "/manage/:shtetiId"]}
          component={ShtetiForm}
        />

        <Route exact path="/qyteti" component={QytetiAPI} />
        <Route path="/qyteti/:qytetiId" component={QytetiDetails} />
        <Route
          key={location.key}
          path={["/createQytet", "/manage/:qytetiId"]}
          component={QytetiForm}
        />

        <Route exact path="/gjendja" component={GjendjaAPI} />

        <Route exact path="/gjendja" component={GjendjaAPI} />

        <Route path="/gjendja/:gjendjaId" component={GjendjaDetails} />
        <Route
          key={location.key}
          path={["/createGjendje", "/manage/:gjendjaId"]}
          component={GjendjaForm}
        />

        <Route exact path="/Pajisja" component={PajisjaAPI} />
        <Route path="/Pajisja/:pajisjaId" component={PajisjaDetails} />
        <Route
          key={location.key}
          path={["/createPajisje", "/manage/:pajisjaId"]}
          component={PajisjaForm}
        />
        <Route exact path="/KohaPunes" component={KohaPunesAPI} />

        <Route path="/KohaPunes/:kohaId" component={KohaPunesDetails} />
        <Route
          key={location.key}
          path={["/createKohePune", "/manage/:kohaId"]}
          component={KohaPunesForm}
        />
        <Route exact path="/MenyraPageses" component={MenyraPagesesAPI} />

        <Route
          path="/MenyraPageses/:menyraPagesesId"
          component={MenyraPagesesDetails}
        />
        <Route
          key={location.key}
          path={["/createMenyrePagese", "/manage/:menyraPagesesId"]}
          component={MenyraPagesesForm}
        />
        <Route exact path="/LlojiShtepise" component={LlojiShtepiseAPI} />

        <Route
          path="/LlojiShtepise/:llojiShtepiseId"
          component={LlojiShtepiseDetails}
        />
        <Route
          key={location.key}
          path={["/createLlojShtepie", "/manage/:llojiShtepiseId"]}
          component={LlojiShtepiseForm}
        />
        <Route exact path="/Rolet" component={RoliAPI} />

        <Route path="/Rolet/:roliId" component={RoliDetails} />
        <Route
          key={location.key}
          path={["/createRole", "/manage/:roliId"]}
          component={RoliForm}
        />
        <Route exact path="/Kafshet" component={KafshetAPI} />

        <Route path="/Kafshet/:kafshetId" component={KafshetDetails} />
        <Route
          key={location.key}
          path={["/createKafshet", "/manage/:kafshetId"]}
          component={KafshetForm}
        />

        <Route exact path="/Stafi" component={StafiAPI} />

        <Route path="/Stafi/:stafiId" component={StafiDetails} />
        <Route
          key={location.key}
          path={["/createStaf", "/manage/:stafiId"]}
          component={StafiForm}
        />

        <Route exact path="/lagjja" component={LagjjaAPI} />

        <Route path="/lagjja/:lagjjaId" component={LagjjaDetails} />
        <Route
          key={location.key}
          path={["/createLagje", "/manage/:lagjjaId"]}
          component={LagjjaForm}
        />
        {/* 
     <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/errors" component={TestErrors} />
        <Route path="/server-error" component={ServerError} /> */}
      </Switch>
    </>
  );
}

export default observer(App);
