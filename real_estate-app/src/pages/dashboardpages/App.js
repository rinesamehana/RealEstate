import Home from "./home/Home";



import New from "./new/New";
import { Switch, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import GjiniaAPI from "../../app/axios/GjiniaAPI";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark " : "app"}>
      <div className="App">
        <Switch>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="users">
              {/* <Route index element={<List />} /> */}
              {/* <Route path=":userId" element={<Single />} /> */}
            </Route>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
