import React from "react";
import Button from "../components/button";
import Img_1 from "../../../assets/pic_1.png";
import navigate from "../inc/scripts/utilities";
import { db } from "../backend/app_backend";
import Swal from "sweetalert2";
import jQuery from "jquery";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Home1 = () => {
  const customBtnStyle = {
    fontSize: "18px",
    margin:"auto"
  };
  const middletext = {
    textAlign: "center",
    fontSize: "40px"
  }
  function click() {
    Swal.fire({
      title: "Default Location",
      html: "<input type='text' placeholder='Enter location' class='form-control border-1 p-3 brand-small-text w-100' id='defaultLocation'>",
      confirmButtonText: "Save Location",
      confirmButtonColor: "rgb(83, 166, 250)",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
    }).then(willProceed => {
      if (willProceed.isConfirmed) {
        jQuery($ => {
          $.noConflict();
          const $defaultLocation = $("#defaultLocation").val().trim();
          if ($defaultLocation === undefined || $defaultLocation == "") {
            Swal.fire({
              title: "Invalid Location!",
              html: "<p class=' text-center text-danger'>Please enter a valid location</p>",
              confirmButtonColor: "rgb(83, 166, 250)",
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              timer: 4000
            });
          } else {
            Swal.fire({
              text: "Location saved successfully!",
              icon: "success",
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000
            });
            db.create("HOME_PAGE_SEEN", true);
            db.create("USER_DEFAULT_LOCATION", $defaultLocation);
            db.create("TRACK_SAVED_LOCATION_WEATHER", false);
            db.create("WEATHER_UNIT", "metric");
            navigate("weather");
          }
        });
      }
    });
  }
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "weather-preloader container-fluid d-flex align-items-center flex-column text-center margin-auto",
      style: middletext,
      children: [/*#__PURE__*/_jsx("main", {
        className: "my-5 preloader-weather-heading",
        children: /*#__PURE__*/_jsx("h2", {
          className: "text-center text-capitalize m-auto fw-bold fs-2",
          children: "Welcome to weather app"
        })
      }), 
      // /*#__PURE__*/_jsx("section", {
      //   className: "m-auto text-center img-container my-md-4 my-3",
      //   id: "img-container",
      //   children: /*#__PURE__*/_jsx("img", {
      //     src: Img_1,
      //     className: "img-fluid m-auto preloader-img",
      //     height: "700",
      //     width: "550",
      //     alt: "current-weather-status"
      //   })
      // }),
      
      /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
        text: "Set Default Location",
        style: customBtnStyle,
        className: "brand-btn m-auto my-5 width-toggle",
        onClick: event => {
          click(event);
        }
      })]
    })
  });
};
export default Home1;