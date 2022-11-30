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
import House from "./pages/house/HouseId";
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
import ShtepiaForm from "./components/adminpage/shtepia/form/ShtepiaForm";
import ShtepiaDetails from "./components/adminpage/shtepia/details/ShtepiaDetails";
import ShtepiaAPI from "./app/axios/ShtepiaAPI";

// import { Listt } from "./pages";
import { Listt, ProfilePage} from "./pages";
import HouseId from "./pages/house/HouseId";
import neighborhood from "./pages/neighborhood/NeighborhoodPage";
import housepage from "./pages/housespage/housepage";
import Contact from "./components/contact/contact";
import OurTeam from "./components/ourteam/OurTeam";
// import ProfilePage from "./pages/profiles/ProfilePage";
import Rezervimiii from "./pages/rezervim/RezervimiForm";
import RezervimiAPI from "./app/axios/RezervimiAPI";

import RezervimiDetails from "./components/adminpage/rezervimi/details/RezervimiDetails";
import RezervimiForm from "./pages/rezervim/RezervimiForm";
import RezervimiInfo from "./pages/rezervim/RezervimiInfo";









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
  

  // useEffect(() => {
  //   if (commonStore.token) {
  //     userStore.getUser().finally(() => commonStore.setAppLoaded());
  //   } else {
  //     commonStore.setAppLoaded();
  //   }
  // }, [commonStore, userStore]);


  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   setFavorites(data);
  // }, []);

  // function handleFavorite(id) {
  //   const newFavorites = favorites.map(item => {
  //     return item.id === id ? { ...item, favorite: !item.favorite } : item;
  //   });

  //   setFavorites(newFavorites);
  // }


  // if (!commonStore.appLoaded) return <LoadingComponent content="Loading..." />;

  return (
    <>
      <ToastContainer position="bottom-right" />

      <Switch>
        {/* <Route path='/favorite'><HouseItem  favorites={favorites} handleFavorite={handleFavorite}/>  </Route> */}
        <Route exact path="/" component={Home} />
        <Route path="/houses/:shtepiaId" component={HouseId} />
      
        {/* <Route path="/search" component={Search} /> */}
        <Route path="/houses" component={Listt} />
  
        <Route
          path='/reservations' component={RezervimiInfo}
        />
    
        <Route path="/towns" component={neighborhood} />
        {/* <Route path="/profile" component={Profile} />  */}

        <Route path="/profiles/:username" component={ProfilePage} /> 
        
        <Route path="/contactus" component={Contact}/>

        <Route path="/teams" component={OurTeam}/>


       
   
          
          {/* <List favorites={favorites} handleFavorite={handleFavorite} />  */}
        
        <Route path="/dashboard" component={Dashboard} />

        {/* <Route path="/users" component={List} /> */}
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
          path={"/(shtepia|manageShtepi|createShtepi|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/shtepia" component={ShtepiaAPI} />
              <PrivateRoute path="/shtepia/:shtepiaId" component={ShtepiaDetails} />
              <PrivateRoute
                key={location.key}
                path={["/manageShtepi/:shtepiaId", "/createShtepi"]}
                component={ShtepiaForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(rezervimi|manageRezervimi|createRezervim|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/rezervimi" component={RezervimiAPI} />
              <PrivateRoute path="/rezervimi/:rezervimiId" component={RezervimiDetails} />
              <Route
                key={location.key}
                path={["/manageRezervimi/:rezervimiId", "/createRezervim"]}
                component={RezervimiForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        /> 
        <Route
          path={"/(kontrata|manageKontrata|createKontrata|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/kontrata" component={KontrataAPI} />
              <PrivateRoute path="/kontrata/:id" component={KontrataDetails} />
              <PrivateRoute
                key={location.key}
                path={["/createKontrata", "/manageKontrata/:id"]}
                component={KontrataForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(pamja|managePamje|createPamja|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/pamja" component={PamjaAPI} />
              <PrivateRoute path="/pamja/:pamjaId" component={PamjaDetails} />
              <PrivateRoute
                key={location.key}
                path={["/createPamja", "/managePamje/:pamjaId"]}
                component={PamjaForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(ambienti|manageAmbienti|createAmbient|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/ambienti" component={AmbientiAPI} />
              <PrivateRoute
                path="/ambienti/:ambientiId"
                component={AmbientiDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createAmbient", "/manageAmbienti/:ambientiId"]}
                component={AmbientiForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={
            "/(llojiUser|manageLlojiUser|createLlojiUser|errors|server-error)"
          }
          render={() => (
            <Switch>
              <PrivateRoute exact path="/llojiUser" component={LlojUserAPI} />
              <PrivateRoute
                path="/llojiUser/:llojiUserId"
                component={LlojiUseritDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createLlojiUser", "/manageLlojiUser/:llojiUserId"]}
                component={LlojiUseritForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(shteti|manageShteti|createShtet|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/shteti" component={ShtetetAPI} />
              <PrivateRoute
                path="/shteti/:shtetiId"
                component={ShtetiDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createShtet", "/manageShteti/:shtetiId"]}
                component={ShtetiForm}
              />
              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />

        <Route
          path={"/(qyteti|manageQyteti|createQytet|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/qyteti" component={QytetiAPI} />
              <PrivateRoute
                path="/qyteti/:qytetiId"
                component={QytetiDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createQytet", "/manageQyteti/:qytetiId"]}
                component={QytetiForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(gjendja|manageGjendja|createGjendje|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/gjendja" component={GjendjaAPI} />
              <PrivateRoute
                path="/gjendja/:gjendjaId"
                component={GjendjaDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createGjendje", "/manageGjendja/:gjendjaId"]}
                component={GjendjaForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(Pajisja|managePajisja|createPajisje|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/Pajisja" component={PajisjaAPI} />
              <PrivateRoute
                path="/Pajisja/:pajisjaId"
                component={PajisjaDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createPajisje", "/managePajisja/:pajisjaId"]}
                component={PajisjaForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={
            "/(KohaPunes|manageKohaePunes|createKohePune|errors|server-error)"
          }
          render={() => (
            <Switch>
              <PrivateRoute exact path="/KohaPunes" component={KohaPunesAPI} />
              <PrivateRoute
                path="/KohaPunes/:kohaId"
                component={KohaPunesDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createKohePune", "/manageKohaePunes/:kohaId"]}
                component={KohaPunesForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(Pajisja|managePajisja|createPajisje|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/Pajisja" component={PajisjaAPI} />
              <PrivateRoute
                path="/Pajisja/:pajisjaId"
                component={PajisjaDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createPajisje", "/managePajisja/:pajisjaId"]}
                component={PajisjaForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={
            "/(MenyraPageses|manageMenyraPageses|createMenyrePagese|errors|server-error)"
          }
          render={() => (
            <Switch>
              <PrivateRoute
                exact
                path="/MenyraPageses"
                component={MenyraPagesesAPI}
              />
              <PrivateRoute
                path="/MenyraPageses/:menyraPagesesId"
                component={MenyraPagesesDetails}
              />
              <PrivateRoute
                key={location.key}
                path={[
                  "/createMenyrePagese",
                  "/manageMenyraPageses/:menyraPagesesId",
                ]}
                component={MenyraPagesesForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={
            "/(LlojiShtepise|manageLlojiShtepise|createLlojShtepie|errors|server-error)"
          }
          render={() => (
            <Switch>
              <PrivateRoute
                exact
                path="/LlojiShtepise"
                component={LlojiShtepiseAPI}
              />
              <PrivateRoute
                path="/LlojiShtepise/:llojiShtepiseId"
                component={LlojiShtepiseDetails}
              />
              <PrivateRoute
                key={location.key}
                path={[
                  "/createLlojShtepie",
                  "/manageLlojiShtepise/:llojiShtepiseId",
                ]}
                component={LlojiShtepiseForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(Rolet|manageRolet|createRole|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/Rolet" component={RoliAPI} />
              <PrivateRoute path="/Rolet/:roliId" component={RoliDetails} />
              <PrivateRoute
                key={location.key}
                path={["/createRole", "/manageRolet/:roliId"]}
                component={RoliForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(Kafshet|manageKafshet|createKafshet|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/Kafshet" component={KafshetAPI} />
              <PrivateRoute
                path="/Kafshet/:kafshetId"
                component={KafshetDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createKafshet", "/manageKafshet/:kafshetId"]}
                component={KafshetForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />

        <Route
          path={"/(Stafi|manageStafi|createStaf|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/Stafi" component={StafiAPI} />
              <PrivateRoute path="/Stafi/:stafiId" component={StafiDetails} />
              <PrivateRoute
                key={location.key}
                path={["/createStaf", "/manageStafi/:stafiId"]}
                component={StafiForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />
        <Route
          path={"/(lagjja|manageLagje|createLagje|errors|server-error)"}
          render={() => (
            <Switch>
              <PrivateRoute exact path="/lagjja" component={LagjjaAPI} />
              <PrivateRoute
                path="/lagjja/:lagjjaId"
                component={LagjjaDetails}
              />
              <PrivateRoute
                key={location.key}
                path={["/createLagje", "/manageLagje/:lagjjaId"]}
                component={LagjjaForm}
              />

              <PrivateRoute path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
            </Switch>
          )}
        />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default observer(App);
