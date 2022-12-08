import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Data from "../pages/Data/Data";
import Dashboard from "../pages/dashboard";
import Users from "../pages/Users";
import Preferences from "../pages/Preferences/Preferences";
import Maps from "../pages/Maps/GridMaps"
import SingOut from "../pages/Sing Out/SingOut";
const Router = () => {
  return (
    <Routes>
      
      <Route path="/data" element={<Data />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/users" element={<Users />} />
      <Route path="/singout" element={<SingOut />} />
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/maps" element={<Maps/>} />
    </Routes>
  );
};

export default Router;
