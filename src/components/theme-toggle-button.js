import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const colorMode = useColorModeValue("purple", "orange");
  const iconMode = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={colorMode}
      icon={iconMode}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
};

export default ThemeToggleButton;
