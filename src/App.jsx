import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { color } from "framer-motion";
import { Boards } from "./Components/Boards";
import { Route, Routes } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/createBoard",
      element: <Boards />,
    },
  ];
  return (
    <>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
