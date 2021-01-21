import React from "react";
import Home from "../src/components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Router>
        <Home />
        <Nav />
      </Router>
    </>
  );
};

export default App;
