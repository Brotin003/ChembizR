import React from "react";

const sizes = {
  xs: "text-lg font-normal",
  lg: "text-xl font-normal",
  s : "text-base font-normal",
  "2xl":"text-2xl font-normal md:text-[22px]",
  "3xl": "text-[56px] font-light md:text-5xl sm:text-[42px]",
  xl : "text-2xl font-normal md:text-[22px]",
  md: "text-lg font-medium"
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-A700 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
