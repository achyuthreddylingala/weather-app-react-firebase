// import React from "react";
import FooterNav from "./footerNav";
import UtilityComponent from "./utilityFooterComponet";
import PropTypes from 'prop-types';

const Footer = (props) => {
  const customFooterStyle = {
    zIndex: "10",
  };
  return (
    <div
      className="m-auto d-flex align-items-center justify-content-center "
      style={customFooterStyle}
    >
      <UtilityComponent tags={props.utilityTags}/>
      <footer style={{
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
            }} className="shadow-lg d-flex align-items-center justify-content-center footer-nav-container">
        <FooterNav onClick={props.onClick}/>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  utilityTags: PropTypes.any,     
  onClick: PropTypes.any,  

};

export default Footer;
