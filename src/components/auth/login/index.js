import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSignInAnonymously } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Login = () => {
  const {
    userLoggedIn
  } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = async e => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };
  const onGoogleSignIn = e => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false);
      });
    }
  };

  const onSubmitguest = async e => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInAnonymously();
      // doSendEmailVerification()
    }
  };


  return /*#__PURE__*/_jsxs("div", {
    children: [userLoggedIn && /*#__PURE__*/_jsx(Navigate, {
      style: {
        maxWidth: '400px',
        margin: 'auto',
        textAlign: 'center !important'
      },
      to: '/home',
      replace: true
    }), /*#__PURE__*/_jsx("main", {
      style: {
        maxWidth: '400px',
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#ffffffa0',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)'
      },
      className: "flex items-center justify-center",
      children: /*#__PURE__*/_jsxs("div", {
        style: {
          width: '24rem'
        },
        className: "text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl",
        children: [/*#__PURE__*/_jsx("div", {
          className: "text-center",
          children: /*#__PURE__*/_jsx("div", {
            className: "mt-2",
            children: /*#__PURE__*/_jsx("h3", {
              className: "text-gray-800 text-xl font-semibold sm:text-2xl",
              children: "Welcome Back"
            })
          })
        }), /*#__PURE__*/_jsxs("form", {
          onSubmit: onSubmit,
          style: {
            marginTop: '1.25rem'
          },
          children: [/*#__PURE__*/_jsxs("div", {
            style: {
              marginBottom: '1.25rem'
            },
            children: [/*#__PURE__*/_jsx("label", {
              style: {
                fontSize: '0.875rem',
                color: '#4B5563',
                fontWeight: 'bold'
              },
              children: "Email"
            }), /*#__PURE__*/_jsx("input", {
              type: "email",
              autoComplete: "email",
              required: true,
              value: email,
              onChange: e => {
                setEmail(e.target.value);
              },
              style: {
                width: '100%',
                padding: '0.75rem',
                color: '#6B7280',
                backgroundColor: 'transparent',
                outline: 'none',
                border: '1px solid',
                borderColor: 'rgba(66, 153, 225, 0.5)',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                borderRadius: '0.375rem',
                transition: 'border-color 0.3s ease'
              }
            })]
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              marginBottom: '1.25rem'
            },
            children: [/*#__PURE__*/_jsx("label", {
              style: {
                fontSize: '0.875rem',
                color: '#4B5563',
                fontWeight: 'bold'
              },
              children: "Password"
            }), /*#__PURE__*/_jsx("input", {
              type: "password",
              autoComplete: "current-password",
              required: true,
              value: password,
              onChange: e => {
                setPassword(e.target.value);
              },
              style: {
                width: '100%',
                padding: '0.75rem',
                color: '#6B7280',
                backgroundColor: 'transparent',
                outline: 'none',
                border: '1px solid',
                borderColor: 'rgba(66, 153, 225, 0.5)',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                borderRadius: '0.375rem',
                transition: 'border-color 0.3s ease'
              }
            })]
          }), errorMessage && /*#__PURE__*/_jsx("span", {
            style: {
              color: '#DC2626',
              fontWeight: 'bold'
            },
            children: errorMessage
          }), /*#__PURE__*/_jsx("button", {
            type: "submit",
            disabled: isSigningIn,
            style: {
              width: '100%',
              padding: '0.5rem 1rem',
              color: 'white',
              fontWeight: '500',
              borderRadius: '0.375rem',
              backgroundColor: isSigningIn ? '#D1D5DB' : '#2563EB',
              cursor: isSigningIn ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
            },
            className: isSigningIn ? '' : 'hover:bg-indigo-700',
            children: isSigningIn ? 'Signing In...' : 'Sign In'
          })]
        }), /*#__PURE__*/_jsxs("p", {
          style: {
            textAlign: 'center',
            fontSize: '0.875rem'
          },
          children: ["Don't have an account? ", /*#__PURE__*/_jsx(Link, {
            to: '/register',
            style: {
              textDecoration: 'underline',
              fontWeight: 'bold'
            },
            children: "Sign up"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-center w-full",
          style: {
            marginTop: '1rem'
          },
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              fontSize: '0.875rem',
              fontWeight: 'bold',
              textAlign: 'center'
            },
            children: "OR"
          }), /*#__PURE__*/_jsx("br", {})]
        }), /*#__PURE__*/_jsxs("button", {
          disabled: isSigningIn,
          onClick: onGoogleSignIn,
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#12df32aa',
            padding: '0.625rem',
            border: '1px solid',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            cursor: isSigningIn ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
          },
          className: isSigningIn ? '' : 'hover:bg-gray-100 active:bg-gray-100',
          children: [/*#__PURE__*/_jsxs("svg", {
            width: "30",
            height: "30",
            className: "w-5 h-5",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/_jsxs("g", {
              clipPath: "url(#clip0_17_40)",
              children: [/*#__PURE__*/_jsx("path", {
                d: "M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z",
                fill: "#4285F4"
              }), /*#__PURE__*/_jsx("path", {
                d: "M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z",
                fill: "#34A853"
              }), /*#__PURE__*/_jsx("path", {
                d: "M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z",
                fill: "#FBBC04"
              }), /*#__PURE__*/_jsx("path", {
                d: "M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z",
                fill: "#EA4335"
              })]
            }), /*#__PURE__*/_jsx("defs", {
              children: /*#__PURE__*/_jsx("clipPath", {
                id: "clip0_17_40",
                children: /*#__PURE__*/_jsx("rect", {
                  width: "48",
                  height: "48",
                  fill: "white"
                })
              })
            })]
          }), isSigningIn ? 'Signing In...' : 'Continue with Google']
        }),
      

         /*#__PURE__*/_jsx("br", {}),
      
      /*#__PURE__*/_jsx("button", {
  disabled: isSigningIn,
  onClick: onSubmitguest,
  style: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#543737aa',
    padding: '0.625rem',
    border: '1px solid',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: isSigningIn ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
  },
  className: isSigningIn ? '' : 'hover:bg-gray-100 active:bg-gray-100',
  children: isSigningIn ? 'Signing In...' : 'Continue as Guest'
}),


      ]
      })
    })]
  });
};
export default Login;