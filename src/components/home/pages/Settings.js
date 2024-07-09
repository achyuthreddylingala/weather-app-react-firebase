import React, { useState } from "react";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Button from "../components/button";
import { db } from "../backend/app_backend";
import * as settings from "../backend/settings";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Settings = () => {
  const navigateHome = () => {
    navigate("./weather");
  };
  const [defaultLocation, setDefaultLocation] = useState(settings.getDefaultLocation());
  const [weatherUnit, setWeatherUnit] = useState();
  let trackedLocation = db.get("TRACK_SAVED_LOCATION_WEATHER");
  let trackedLocationLegit = trackedLocation == "true" ? true : false;
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsxs("section", {
      className: "container-fluid",
      children: [/*#__PURE__*/_jsxs("section", {
        className: "app-header d-flex justify-content-between my-3",
        children: [/*#__PURE__*/_jsx("div", {
          className: "toggle-btn ",
          children: /*#__PURE__*/_jsx("svg", {
            height: "30",
            id: "Layer_1",
            version: "1.1",
            onClick: navigateHome,
            viewBox: "0 0 512 512",
            width: "30",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/_jsx("polygon", {
              points: "352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "
            })
          })
        }), /*#__PURE__*/_jsx("section", {
          className: "city-locaton",
          children: /*#__PURE__*/_jsx("h5", {
            className: "fw-bold fs-5 text-capitalize",
            children: "change Settings"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "toggle-btn "
        })]
      }), /*#__PURE__*/_jsx("section", {
        className: "d-flex align-items-start justify-content-center w-100",
        children: /*#__PURE__*/_jsxs("section", {
          className: "settings",
          children: [/*#__PURE__*/_jsxs("form", {
            action: "",
            id: "settingsForm",
            onSubmit: e => e.preventDefault(),
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "defaultLocation ",
              className: "brand-small-text py-3",
              children: "Update your default location"
            }), /*#__PURE__*/_jsx("input", {
              type: "text",
              name: "defaultLocation",
              id: "defaultLocation",
              className: "form-control p-3 my-1 brand-small-text ",
              value: defaultLocation,
              placeholder: "Enter your default location to track..",
              onChange: e => {
                setDefaultLocation(e.target.value);
              }
            }), /*#__PURE__*/_jsx("section", {
              className: "my-2 d-md-flex align-items-center justify-content-md-center d-lg-block",
              children: /*#__PURE__*/_jsx(Button, {
                text: "save location",
                className: "shadow brand-btn-3  my-5 text-light text-capitalize",
                onClick: e => {
                  settings.saveLocation(e);
                }
              })
            }), /*#__PURE__*/_jsx("label", {
              htmlFor: "defaultWeatherUnit ",
              className: "text-capitalize py-2 my-2",
              children: "select your default weather unit"
            }), /*#__PURE__*/_jsx("div", {
              className: "mb-3",
              children: /*#__PURE__*/_jsxs("select", {
                className: "form-select form-select my-2",
                name: "weatherUnit",
                id: "weatherUnitContainer",
                value: weatherUnit,
                onChange: e => setWeatherUnit(e.target.value),
                children: [/*#__PURE__*/_jsx("option", {
                  defaultValue: "SELECT",
                  value: 0,
                  className: "text-capitalize",
                  children: "Degree Celsius"
                }), /*#__PURE__*/_jsx("option", {
                  defaultValue: "",
                  value: 1,
                  className: "text-capitalize",
                  children: "kelvin"
                }), /*#__PURE__*/_jsx("option", {
                  defaultValue: "",
                  value: 2,
                  className: "text-capitalize",
                  children: "Farenheit"
                })]
              })
            }), /*#__PURE__*/_jsx("section", {
              className: "my-2 d-md-flex align-items-center justify-content-md-center d-lg-block",
              children: /*#__PURE__*/_jsx(Button, {
                text: "save unit",
                className: "shadow brand-btn-3-secondary toggle-width-3 my-5 text-dark text-capitalize p-2",
                onClick: e => settings.changeWeatherUnit(e)
              })
            }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("hr", {
              className: "horizontal-line py-3 w-75 m-auto "
            }), /*#__PURE__*/_jsxs("section", {
              className: "factory-settings my-3",
              children: [/*#__PURE__*/_jsx("label", {
                htmlFor: "factory-settings-reset ",
                className: "text-capitalize",
                children: "restore factory settings"
              }), /*#__PURE__*/_jsx("section", {
                className: "d-md-flex align-items-center justify-content-center d-lg-block",
                children: /*#__PURE__*/_jsx(Button, {
                  text: "restore settings",
                  className: "shadow brand-btn-3-secondary toggle-width-3 my-5 text-dark text-capitalize p-2",
                  onClick: settings.restoreFactorySettings
                })
              }), /*#__PURE__*/_jsx("p", {
                className: "text-muted brand-small-text",
                children: "Restoring factory settings removes all the data stored on this device. You would be taken to the setup screen."
              })]
            }), /*#__PURE__*/_jsxs("section", {
              className: "form-check form-switch my-3",
              children: [/*#__PURE__*/_jsx("input", {
                className: "form-check-input",
                type: "checkbox",
                role: "switch",
                id: "flexSwitchCheckDefault",
                onClick: settings.trackSavedLocationWeather,
                defaultChecked: trackedLocationLegit
              }), /*#__PURE__*/_jsx("label", {
                className: "form-check-label text-capitalize",
                htmlFor: "flexSwitchCheckDefault",
                children: "track saved location weather"
              })]
            }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {})]
          }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {})]
        })
      }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Footer, {})]
    })
  });
};
export default Settings;