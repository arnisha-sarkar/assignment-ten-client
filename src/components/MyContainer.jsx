import React from "react";

const MyContainer = ({ clasName, children }) => {
  return <div className={`${clasName} container mx-auto`}>{children}</div>;
};

export default MyContainer;
