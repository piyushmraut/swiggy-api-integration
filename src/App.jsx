import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import UserContext from "./utils/UserContext";

function App() {
  const [userInfo, setUserInfo] = useState();
  // Let's try to write the code for the authetication part
  useEffect(() => {
    const data = {
      name: "Piyush Raut",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userInfo,setUserInfo }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
