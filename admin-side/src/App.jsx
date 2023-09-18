import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";
import Appbar from "./components/Appbar";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import RestaurantList from "./components/Restaurants";
import RestaurantMenu from "./components/Menu";
import { useEffect } from "react";
import axios from "axios";
import { userState } from "./store/atoms/user";

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

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    console.log("init got called *** ");
    try {
      const response = await axios.get("http://localhost:3000/admin/me", {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}

export default App;
