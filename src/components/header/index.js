import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Header = () => {
  const navigate = useNavigate();
  const {
    userLoggedIn
  } = useAuth();
  return /*#__PURE__*/_jsx("nav", {
    style: {
      maxWidth: '400px',
      height: 'auto',
      margin: 'auto',
      backgroundColor: '#ffffff00',
      marginBottom: '40px',
      textAlign: 'center',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    className: "flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200",
    children: userLoggedIn ? /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsx("button", {
        onClick: () => {
          doSignOut().then(() => {
            navigate('/login');
          });
        },
        className: "text-sm text-blue-600 underline",
        children: "Logout"
      })
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(Link, {
        className: "text-sm text-blue-600 underline",
        to: '/login',
        children: "Login"
      }), " ", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
        className: "text-sm text-blue-600 underline",
        to: '/register',
        children: "Register New Account"
      })]
    })
  });
};
export default Header;