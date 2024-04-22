import { FC, useEffect } from "react";
import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignIn } from "./pages/SignIn/SignIn";

export const App: FC = () => {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/auth");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignIn />} />
      </Routes>
    </>
  );
};
