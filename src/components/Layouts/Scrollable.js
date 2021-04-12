import React from "react";
import classnames from "classnames";

const Scrollable = ({ children, className = "", size = "" }) => {
  return (
    <div
      className={classnames(
        'nt-scrollable', {
          [`nt-scrollable--${size}`]: size,
          [className]: className
        })}
    >
      {children}
    </div>
  );
};

export default Scrollable;
