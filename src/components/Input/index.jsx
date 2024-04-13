import React from 'react'
import PropTypes from 'prop-types'
const shapes ={
    round : "rounded-[10px]"
};
const variants ={
    fill : {
        gray_100_01 :"bg-gray-100_01 text-gray-700",
        white_A700: "bg-white-A700 text-black-900",
    },
};
const sizes ={
    sm: "h-[49px] pl-[19px] pr-[35px]",
    xs: "h-[49px] pl-[18px] pr-[35px] text-[15px]",
};

const Input = React.forwardRef(
    (
        {
            className="",
            name="",
            placeholder="",
            type="text",
            children,
            label="",
            prefix,
            suffix,
            onChange,
            shape,
            variant ="fill",
            size="xs"  ,
            color ="white_A700",
            ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) {
                onChange(e?.target?.value);
            }
        }
    
    return (
        <>
        <div className={`${className} flex items-center justify-center text-gray-700 text-base bg-gray-100_01 rounded-lg ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}>
            {!!label && label}
            {!!prefix && prefix}
            <input
                ref={ref}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                {...restProps}
            />
            {!!suffix && suffix}
        </div>
        </>
    );
},
);
Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
 
    shape: PropTypes.oneOf("round"),
    variant: PropTypes.oneOf(["fill"]),
    size: PropTypes.oneOf(['sm', 'xs']),
    color: PropTypes.oneOf(["gray_100_01", "white_A700"]),
};
export  {Input};