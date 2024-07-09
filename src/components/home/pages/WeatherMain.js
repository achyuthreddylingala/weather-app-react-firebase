import React from "react";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import { db } from "../backend/app_backend";
import HumidityIcon from "../../../assets/humidity-icon.svg";
import WindIcon from "../../../assets/wind-icon.svg";
import PressureIcon from "../../../assets/pressure-icon.svg";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const WeatherMain = () => {
  const navigateHome = () => {
    navigate("/weather");
  };
  const customTextStyle = {
    display: "block",
    transform: "translateX(-7px)"
  };
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsxs("section", {
      className: "container-fluid d-flex flex-column py-2 width-toggle-5 m-auto",
      style: {
        overflowX: "hidden"
      },
      children: [/*#__PURE__*/_jsxs("section", {
        className: "app-header d-flex justify-content-between",
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
            className: "fw-bold fs-5",
            children: db.get("WEATHER_LOCATION") || "Lagos, 9ja"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "toggle-btn ",
          children: /*#__PURE__*/_jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30px",
            height: "30px",
            viewBox: "0 0 24 24",
            className: "d-block",
            children: [/*#__PURE__*/_jsx("path", {
              fill: "white",
              d: "M0 0h24v24H0V0z"
            }), /*#__PURE__*/_jsx("path", {
              fill: "lightskyblue",
              d: "M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
            })]
          })
        })]
      }), /*#__PURE__*/_jsxs("section", {
        className: "current-weather-value-container d-flex align-items-center justify-content-center flex-column my-4",
        children: [/*#__PURE__*/_jsxs("section", {
          className: "d-flex ",
          children: [/*#__PURE__*/_jsx("h1", {
            className: "current-weather-value fw-bold brand-large-text",
            children: Math.ceil(db.get("WEATHER_DEG")) || "30"
          }), /*#__PURE__*/_jsx("sup", {
            className: "fw-bold brand-medium-text current-weather-unit",
            children: "o"
          })]
        }), /*#__PURE__*/_jsx("p", {
          className: "text-muted text-start brand-small-text text-capitalize",
          style: customTextStyle,
          children: db.get("WEATHER_DESCRIPTION") || "clear sky"
        })]
      }), /*#__PURE__*/_jsxs("section", {
        className: " rounded-3 shadow my-5 py-2 current-weather-assets brand-tertiary-color d-flex align-items-center justify-content-around",
        children: [/*#__PURE__*/_jsxs("section", {
          className: "current-weather-wind-speed d-flex flex-column align-items-center justify-content-center",
          children: [/*#__PURE__*/_jsx("section", {
            className: "wind-icon py-1",
            children: /*#__PURE__*/_jsx("img", {
              src: WindIcon,
              height: "30",
              width: "30",
              alt: "wind-icon"
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "wind-value fw-bold text-light  brand-small-text text-center py-1 m-0",
            id: "wind-value",
            children: db.get("SUB_WEATHER_WIND_VALUE") || "2.90 m/s"
          }), /*#__PURE__*/_jsx("p", {
            className: "m-0 wind-text text-muted text-capitalize brand-small-text-2 weather-text text-center",
            children: "Wind"
          })]
        }), /*#__PURE__*/_jsxs("section", {
          className: " current-weather-humidity-degree d-flex flex-column align-items-center ",
          children: [/*#__PURE__*/_jsx("section", {
            className: "humidity-icon py-1",
            children: /*#__PURE__*/_jsx("img", {
              src: HumidityIcon,
              height: "30",
              width: "30",
              alt: "humidity-icon"
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "humidity-value fw-bold text-light  brand-small-text  text-center py-1 m-0",
            id: "humidity-value",
            children: db.get("SUB_WEATHER_HUMIDITY_VALUE") || "98%"
          }), /*#__PURE__*/_jsx("p", {
            className: "m-0 humidity-text text-muted text-capitalize text-center brand-small-text-2 weather-text",
            children: "humidity"
          })]
        }), /*#__PURE__*/_jsxs("section", {
          className: "current-weather-rain-degree d-flex flex-column align-items-center",
          children: [/*#__PURE__*/_jsx("section", {
            className: "rain-icon py-1",
            children: /*#__PURE__*/_jsx("img", {
              src: PressureIcon,
              height: "30",
              width: "30",
              alt: "rain-icon"
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "rain-value fw-bold text-light brand-small-text  text-center py-1 m-0",
            id: "pressure-value",
            children: db.get("SUB_WEATHER_PRESSURE_VALUE") || "1000 hPa"
          }), /*#__PURE__*/_jsx("p", {
            className: "m-0 rain-text text-muted text-capitalize text-center brand-small-text-2 weather-text",
            children: "Pressure"
          })]
        })]
      }), /*#__PURE__*/_jsx(Footer, {})]
    })
  });
};
export default WeatherMain;