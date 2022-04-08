import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Footer from "./components/footer/footer.component";
// import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import ContactPage from "./pages/contact/contact.component";

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      
      <Footer/>
      
    </div>
  );
}

export default App;
