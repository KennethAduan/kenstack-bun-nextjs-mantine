"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { Provider as JotaiProvider } from "jotai";
import ReactQueryProvider from "./ReactQueryProvider";

const theme = createTheme({
  /** Your theme override here */
});

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <JotaiProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </JotaiProvider>
    </MantineProvider>
  );
};

export default AppProviders;
