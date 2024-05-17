import { useRoutes } from "react-router-dom";
import Home from "./components/Home"
import './App.css';
// import React from "react";

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> }
  ]);
  return routes;
}

export default App;
