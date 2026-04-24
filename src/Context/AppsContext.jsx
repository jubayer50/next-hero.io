"use client";

import { createContext, useState } from "react";

export const InstallAppContext = createContext();

const AppsContext = ({ children }) => {
  const [installApps, setInstallApps] = useState([]);

  const data = { installApps, setInstallApps };

  return (
    <InstallAppContext.Provider value={data}>
      {children}
    </InstallAppContext.Provider>
  );
};

export default AppsContext;
