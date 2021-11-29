// import "./App.css";
import Sticky from "./Components/Sticky";

import React, { useEffect, useRef, useState } from "react";
import Overview from "./Components/Overview";
import InfoForm from "./Components/InfoForm";
import Register from "./Components/Register";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Columns from "./Components/Columns";
import Footer from "./Components/Footer";
import Clients from "./Components/Clients";

// import Form from "../Components/Form";

function App() {
  const registerRef = useRef();
  const columnRef = useRef();
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Register ref={registerRef} />
      <Sticky register={registerRef} column={columnRef} />
      <Columns ref={columnRef} />
      <Clients />
      <Footer />
    </React.Fragment>
  );
}

export default App;
