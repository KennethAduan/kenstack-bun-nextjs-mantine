import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
const MantineProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
};

export default MantineProviders;
