import React, { useState, useEffect } from "react";
import jQuery from "jquery";
import Button from "../components/button";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import * as formHandler from "../apis/get_Weather";
import { db } from "../backend/app_backend";
import { getCurrentDate } from "../inc/scripts/utilities";
import Day from "../../../assets/static/day.svg";
import HumidityIcon from "../../../assets/humidity-icon.svg";
import WindIcon from "../../../assets/wind-icon.svg";
import PressureIcon from "../../../assets/pressure-icon.svg";
import backgroung_hills from '../../../assets/static/mountains_bg.jpg';
import PropTypes from 'prop-types';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const WeatherApp = () => {
  if (!db.get("HOME_PAGE_SEEN")) {
    navigate("/");
  }
  const [componentToInsert, setComponentToInsert] = useState("");
  const [weatherInput, setWeatherInput] = useState();
  let savedLocation;
  savedLocation = db.get("USER_DEFAULT_LOCATION");
  const addUtilityComponentHeight = () => {
    jQuery($ => {
      $.noConflict();
      $(".cmp").removeClass("d-none");
      $(".utility-component").toggleClass("add-utility-component-height");
    });
  };
  const showMoreWeather = () => {
    navigate("weathermain");
  };
  const SearchComponent = () => {
    const [searchValue, setSearchValue] = useState("");
    return /*#__PURE__*/_jsx("section", {
      className: "cmp",
      style: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
        marginLeft: '40% !important'
      },
      children: /*#__PURE__*/_jsxs("form", {
        id: "searchWeatherForm",
        onSubmit: e => {
          formHandler.handleWeatherForm(e);
          setWeatherInput('');
        },
        onChange: e => {
          setSearchValue(e.target.value);
        },
        style: {
          textAlign: 'center !important',
          width: '100%',
          color: '#000 !important',
          maxWidth: '320',
          margin: 'auto !important',
          padding: '3rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '20px',
          backgroundColor: '#121212 !important'
        },
        children: [/*#__PURE__*/_jsx("label", {
          htmlFor: "searchWeather",
          style: {
            padding: '0.5rem 0',
            color: '#111 !important',
            textTransform: 'capitalize'
          },
          children: "Search city"
        }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
          type: "text",
          name: "searchWeather",
          id: "searchWeather",
          placeholder: "Enter the name of city",
          value: weatherInput,
          onChange: e => {
            setWeatherInput(e.target.value);
          },
          autoComplete: "off",
          autoFocus: true,
          style: {
            width: '90% !important',
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
            transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
          }
        }), /*#__PURE__*/_jsx("p", {
          className: "error-holder text-danger py-3 fs-6 brand-small-text text-center",
          id: "searchErrorLog",
          style: {
            display: 'none',
            colot: '#121212'
          },
          children: "City not found"
        }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
          text: "Track saved location!",
          className: "shadow brand-btn-3-secondary toggle-width-3 my-5 text-dark text-capitalize p-2",
          id: "searchSavedLocationWeather",
          onClick: e => {
            formHandler.handleWeatherForm(e, savedLocation);
            setWeatherInput('');
          },
          style: {
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f8f9fa',
            color: '#343a40',
            border: '1px solid #e9ecef',
            transition: 'background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out'
          }
        })]
      })
    });
  };
  const SearchMenuComponent = ({
    search
  }) => {
    const [dataArray, changeDataArray] = useState([]);
    useEffect(() => {
      if (search.length > 3) {
        formHandler.findCity(search, changeDataArray);
      }
    }, [search]);
    function clickHandler(e) {
      jQuery("#searchWeather").val(e.target.textContent);
      formHandler.handleWeatherForm(e, savedLocation);
      setWeatherInput();
    }
    return /*#__PURE__*/_jsx("section", {
      className: "cmp",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: '#ffffff',
        padding: '0.5rem',
        marginTop: '0.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      },
      children: /*#__PURE__*/_jsx("ul", {
        className: "m-0 p-0",
        style: {
          listStyleType: 'none'
        },
        children: dataArray.map((data, index) => /*#__PURE__*/_jsx("li", {
          onClick: () => clickHandler(data),
          style: {
            cursor: 'pointer'
          },
          children: /*#__PURE__*/_jsx("p", {
            className: "text-dark text-left m-0",
            style: {
              fontSize: '14px'
            },
            children: data.name
          })
        }, index))
      })
    });
  };
  const testSearch = () => {
    addUtilityComponentHeight();
    setComponentToInsert( /*#__PURE__*/_jsx(SearchComponent, {}));
  };
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "container-fluid d-flex flex-column py-2 px-0 width-toggle-5 m-auto",
      style: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        paddingLeft: '0',
        paddingRight: '0',
        maxWidth: '100%',
        overflowX: 'hidden',
        background: backgroung_hills
      },
      id: "weatherContainer",
      children: [/*#__PURE__*/_jsx("section", {
        className: "app-header",
        style: {
          display: 'block',
          justifyContent: 'center',
          padding: ' 0',
          margin: '0',
          textAlign: 'center',
          flexDirection: 'row-reverse',
          alignItems: 'center'
        },
        children: /*#__PURE__*/_jsxs("section", {
          className: "city-location",
          children: [/*#__PURE__*/_jsx("h5", {
            className: "fw-bold fs-20 font-80px",
            id: "weatherLocation",
            style: {
              fontWeight: 'bold',
              fontSize: '20px',
              marginTop: '0',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '0'
            },
            children: db.get("WEATHER_LOCATION") || "Location"
          }), /*#__PURE__*/_jsx("p", {
            className: "date-time text-muted brand-small-text text-capitalize font-20px text-center",
            style: {
              color: '#222',
              fontSize: '20px',
              textTransform: 'capitalize',
              textAlign: 'center'
            },
            children: getCurrentDate()
          })]
        })
      }), /*#__PURE__*/_jsxs("section", {
        className: "current-weather-container",
        style: {
          display: 'inline',
          justifyContent: 'space-between',
          padding: '0 200px',
          marginTop: '30px',
          maxWidth: '100%'
        },
        children: [/*#__PURE__*/_jsxs("section", {
          style: {
            display: 'inline',
            justifyContent: 'space-between',
            padding: '0 0',
            marginTop: '30px',
            maxWidth: '30%'
          },
          className: "current-weather-value-container",
          children: [/*#__PURE__*/_jsxs("section", {
            style: {
              fontWeight: 'bold',
              height: '70px'
            },
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/_jsx("h1", {
              className: "current-weather-value fw-bold brand-large-text",
              id: "currentDeg",
              style: {
                fontWeight: 'bold',
                fontSize: '36px',
                color: '#111',
                marginRight: '1000px !important',
                maxWidth: '30%'
              },
              children: Math.ceil(db.get("WEATHER_DEG")) || 30
            }), /*#__PURE__*/_jsx("sup", {
              className: "fw-bold brand-medium-text current-weather-unit",
              style: {
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#111',
                paddingLeft: '100px !important'
              },
              children: "o"
            })]
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted text-capitalize",
            id: "weatherDes",
            style: {
              color: '#111',
              textTransform: 'capitalize',
              marginTop: '5px'
            },
            children: db.get("WEATHER_DESCRIPTION") || "clear sky"
          })]
        }), /*#__PURE__*/_jsx("section", {
          className: "current-weather-icon my-4 mx-3 px-3",
          id: "main-weather-icon-container",
          style: {
            marginTop: '-90px',
            padding: '0 20px',
            color: '#ffffff !important',

            alignContent: 'end !important',
            alignSelf: 'end !important',
            alignItems: 'end !important',
            maxWidth: '30%',
            marginLeft: '90%'
          },
          children: /*#__PURE__*/_jsx("img", {
            src: formHandler.checkWeatherCode(db.get("WEATHER_CODE")) || Day,
            width: 64,
            height: 64,
            alt: "main weather icon",
            id: "main-weather-icon",
            style: {
              display: 'block',
              margin: '0 auto'
            }
          })
        })]
      }), /*#__PURE__*/_jsxs("section", {
        style: {
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',

          padding: '16px',
          display: 'flex',
          textAlign: 'center',
          color: '#ffffff !important',
          margin: '20px 40px 0px 160px',
          backgroundColor: '#006370',
          marginTop: '200px !important'
        },
        children: [/*#__PURE__*/_jsxs("section", {
          style: {
            display: 'block',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '25%',
            color: '#ffffff !important',
            margin: '0 auto',
            padding: '10px',
            backgroundColor: '#006370',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          },
          className: "current-weather-wind-speed",
          children: [/*#__PURE__*/_jsx("section", {
            className: "wind-icon",
            children: /*#__PURE__*/_jsx("img", {
              src: WindIcon,
              height: 30,
              width: 30,
              alt: "wind-icon",
              style: {
                marginBottom: '5px'
              }
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "wind-value",
            style: {
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: '14px',
              margin: '5px 0'
            },
            id: "wind-value",
            children: db.get("SUB_WEATHER_WIND_VALUE") || "2.90 m/s"
          }), /*#__PURE__*/_jsx("p", {
            className: "wind-text",
            style: {
              margin: '0',
              color: '#ffffff',
              fontSize: '12px',
              textTransform: 'capitalize'
            },
            children: "Wind"
          })]
        }), /*#__PURE__*/_jsxs("section", {
          style: {
            display: 'block',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '0 auto',
            padding: '10px',
            color: '#ffffff',
            backgroundColor: '#006370',
            width: '25%',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          },
          className: "current-weather-humidity-degree",
          children: [/*#__PURE__*/_jsx("section", {
            className: "humidity-icon",
            children: /*#__PURE__*/_jsx("img", {
              src: HumidityIcon,
              height: 30,
              width: 30,
              alt: "humidity-icon",
              style: {
                marginBottom: '5px'
              }
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "humidity-value",
            style: {
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: '14px',
              margin: '5px 0'
            },
            id: "humidity-value",
            children: db.get("SUB_WEATHER_HUMIDITY_VALUE") || "98%"
          }), /*#__PURE__*/_jsx("p", {
            className: "humidity-text",
            style: {
              margin: '0',
              color: '#ffffff',
              fontSize: '12px',
              textTransform: 'capitalize'
            },
            children: "Humidity"
          })]
        }), /*#__PURE__*/_jsxs("section", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '33%',
            textAlign: 'center',
            width: '25%',
            margin: '0 auto',
            padding: '10px',
            backgroundColor: '#006370',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          },
          className: "current-weather-rain-degree",
          children: [/*#__PURE__*/_jsx("section", {
            className: "rain-icon",
            children: /*#__PURE__*/_jsx("img", {
              src: PressureIcon,
              height: 30,
              width: 30,
              alt: "pressure-icon",
              style: {
                marginBottom: '5px'
              }
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "rain-value",
            style: {
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: '14px',
              margin: '5px 0'
            },
            id: "pressure-value",
            children: db.get("SUB_WEATHER_PRESSURE_VALUE") || "1000 hPa"
          }), /*#__PURE__*/_jsx("p", {
            className: "rain-text",
            style: {
              margin: '0',
              color: '#ffffff',
              fontSize: '12px',
              textTransform: 'capitalize'
            },
            children: "Pressure"
          })]
        })]
      }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Footer, {
        utilityTags: componentToInsert,
        onClick: testSearch
      })]
    })
  });
};
WeatherApp.propTypes = {
  search: PropTypes.any
};
export default WeatherApp;