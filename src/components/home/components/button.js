import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
const Button = props => {
  return /*#__PURE__*/_jsx("button", {
    style: props.style,
    className: props.className,
    onClick: props.onClick,
    children: props.text
  });
};
Button.propTypes = {
  style: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.any,
  text: PropTypes.any
};
export default Button;