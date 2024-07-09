import React from "react";
import jQuery from "jquery";
import PropTypes from 'prop-types';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const UtilityComponent = props => {
  const closeUtilityComponent = () => {
    jQuery($ => {
      $.noConflict();
      $(".cmp").addClass("d-none");
      $(".utility-component").removeClass("add-utility-component-height");
    });
  };
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsxs("section", {
      className: "utility-component align-items-center justify-content-around m-auto width-toggle-3",
      id: "utilityComponent",
      children: [/*#__PURE__*/_jsx("div", {
        className: "utility-notch my-2",
        onClick: closeUtilityComponent
      }), props.tags]
    })
  });
};
UtilityComponent.propTypes = {
  tags: PropTypes.any
};
export default UtilityComponent;