import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square : "rounded-[0px]",
  round: "rounded",
};
const variants = {
  fill: {
    amber_900: "bg-amber-900 text-white-A700 shadow-xs",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    orange_A200: "bg-orange-A200 text-white-A700",
  },
};
const sizes = {
  lg:"h-[54px] px-[35px] text-base",
  md: "h-[50px] px-[35px] text-base",
  sm: "h-[54px] px-[35px] text-base",
  xs: "h-[43px] px-6 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "orange_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 capitalize text-base rounded ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round","square"]),
  size: PropTypes.oneOf(["sm", "xs", "md", "lg"]),
  variant: PropTypes.oneOf(["fill","outline"]),
  color: PropTypes.oneOf(["blue_gray_900", "orange_A200","amber_900",]),
};

export { Button };
