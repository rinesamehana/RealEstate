import Home from "./home/Home";
import { observer } from "mobx-react-lite";
import New from "./new/New";
import { useStore } from "../../app/stores/store";
import { Switch, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import GjiniaAPI from "../../app/axios/GjiniaAPI";

export default observer(function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { userStore, modalStore } = useStore();
  const {
    userStore: { user, logout },
  } = useStore();
  return (
    
    <div className={darkMode ? "app dark " : "app"}>
      <div className="App">
      {userStore.isLoggedInAsAdmin ?(
        <Switch>
          <Route path="/">
            
            <Route index element={<Home />} />
      
            <Route path="users">
      
            </Route>
          </Route>
        </Switch>
        ):""}
      </div>
    </div>
  );
});

