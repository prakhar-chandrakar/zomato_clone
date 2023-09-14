import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Appbar from "./components/Appbar";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import RestaurantList from "./components/Restaurants";
import RestaurantMenu from "./components/Menu";

function App() {
  return (
    <>
      <RecoilRoot>
        <div
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "#eeeeee",
          }}
        >
          <Router>
            <Appbar />
            <InitUser />
            <Routes>
              <Route path={"/signin"} element={<Signin />} />
              <Route path={"/signup"} element={<Signup />} />
              <Route path={"/restaurants"} element={<RestaurantList />} />
              <Route path={"/menu/:restroId"} element={<RestaurantMenu />} />
              <Route path={"/"} element={<Landing />} />
            </Routes>
          </Router>
        </div>
      </RecoilRoot>
    </>
  );
}

function InitUser() {}

export default App;
