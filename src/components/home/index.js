import React from 'react';
import { useAuth } from '../../contexts/authContext';
import Home1 from "./pages/Home1";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WeatherApp from "./pages/Weather";
import WeatherMain from "./pages/WeatherMain";
import NotFound from "./pages/404";
import Settings from "./pages/Settings";
import "./autoload";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Home = () => {
  const {
    currentUser
  } = useAuth();
  let DEFAULT_ROUTE_PAGE;
  DEFAULT_ROUTE_PAGE = /*#__PURE__*/_jsx(WeatherApp, {});
  return /*#__PURE__*/_jsxs(Routes, {
    children: [/*#__PURE__*/_jsx(Route, {
      index: true,
      element: DEFAULT_ROUTE_PAGE
    }), /*#__PURE__*/_jsx(Route, {
      path: "weather",
      element: /*#__PURE__*/_jsx(WeatherApp, {})
    }), /*#__PURE__*/_jsx(Route, {
      path: "weathermain",
      element: /*#__PURE__*/_jsx(WeatherMain, {})
    }), /*#__PURE__*/_jsx(Route, {
      path: "settings",
      element: /*#__PURE__*/_jsx(Settings, {})
    }), /*#__PURE__*/_jsx(Route, {
      path: "*",
      element: /*#__PURE__*/_jsx(NotFound, {})
    })]
  });
};
export default Home;