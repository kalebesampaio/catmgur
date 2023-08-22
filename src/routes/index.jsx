import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Breed } from "../pages/Breed";
export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/breed/:id" element={<Breed />}></Route>
    <Route path="*" element={<Navigate to="/home" />}></Route>
  </Routes>
);
