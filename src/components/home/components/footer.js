import FooterNav from "./footerNav";
import UtilityComponent from "./utilityFooterComponet";
import PropTypes from 'prop-types';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Footer = props => {
  const customFooterStyle = {
    zIndex: "10"
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "m-auto d-flex align-items-center justify-content-center ",
    style: customFooterStyle,
    children: [/*#__PURE__*/_jsx(UtilityComponent, {
      tags: props.utilityTags
    }), /*#__PURE__*/_jsx("footer", {
      style: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: '80px',
        borderRadius: '20px 20px 0 0 ',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0'
      },
      className: "shadow-lg d-flex align-items-center justify-content-center footer-nav-container",
      children: /*#__PURE__*/_jsx(FooterNav, {
        onClick: props.onClick
      })
    })]
  });
};
Footer.propTypes = {
  utilityTags: PropTypes.any,
  onClick: PropTypes.any
};
export default Footer;