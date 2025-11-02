"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";

const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const handleToggle = () => {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else if (colorScheme === "dark") {
      setColorScheme("auto");
    } else {
      setColorScheme("light");
    }
  };

  const getIcon = () => {
    if (colorScheme === "light") {
      return <IconSun size={20} />;
    } else if (colorScheme === "dark") {
      return <IconMoon size={20} />;
    } else {
      return <IconDeviceDesktop size={20} />;
    }
  };

  return (
    <ActionIcon
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
      onClick={handleToggle}
    >
      {getIcon()}
    </ActionIcon>
  );
};

export default ThemeSwitcher;
