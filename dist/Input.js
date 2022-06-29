import "./Input.css";
import React from "react"

function Input(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    placeholder: `${props.placeholder}`,
    style: {
      height: `${props.height}`,
      width: `${props.width}`,
      fontSize: `${props.fontSize}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: `${props.spanBackground}`,
      color: `${props.spanColor}`
    }
  }, " ", props.sapnName, " "))));
}

export default Input;