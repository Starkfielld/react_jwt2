import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import sign_in from "../pages/sign_in";
import sign_up from "../pages/sign_up";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <sign_in />;
};

const Routes_app = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<sign_in />} />
          <Route exact path="/signup" element={<sign_up />} />
          <Route path="*" element={<sign_in />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default Routes_app;