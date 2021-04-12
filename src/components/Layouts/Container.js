import React from "react";

const Container = React.forwardRef(({ children }, ref) => (
  <div ref={ref} className="nt-container">
    {children}
  </div>
));

export default Container;
