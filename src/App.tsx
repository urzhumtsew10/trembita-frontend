import { FC } from "react";
import "./App.scss";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
