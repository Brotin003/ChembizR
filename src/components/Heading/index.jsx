import React from "react";

const sizes = {
  s: "text-[23px] font-extrabold md:text-[21px]",
  md: "text-8xl font-bold md:text-5xl",
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
