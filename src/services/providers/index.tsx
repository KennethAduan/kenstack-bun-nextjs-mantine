import React from "react";
import MantineProviders from "./MantineProvider";
const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <MantineProviders>{children}</MantineProviders>;
};

export default AppProviders;
