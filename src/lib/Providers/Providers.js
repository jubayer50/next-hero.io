import AppsContext from "@/Context/AppsContext";
import React from "react";

const Providers = ({ children }) => {
  return <AppsContext>{children}</AppsContext>;
};

export default Providers;
