import React from "react";
import Button from "../components/button";
import navigate from "../inc/scripts/utilities";
import Spinner from "../components/spinner";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const NotFound = () => {
  const returnHome = () => {
    navigate("/weather");
  };
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsxs("section", {
      className: "container-fluid d-flex flex-column align-items-center justify-content-center",
      style: {
        minHeight: "100vh"
      },
      children: [/*#__PURE__*/_jsx("h2", {
        className: "text-capitalize my-3 fs-3 fw-bold text-center",
        children: "not found!"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-muted text-capitalize text-center",
        children: "the page requested for was not found!"
      }), /*#__PURE__*/_jsx("section", {
        className: "d-flex align-items-center justify-content-center",
        children: /*#__PURE__*/_jsx(Button, {
          text: "Home",
          className: "brand-btn m-auto my-5 width-toggle",
          onClick: returnHome
        })
      })]
    })
  });
};
export default NotFound;