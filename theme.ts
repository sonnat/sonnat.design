// @ts-nocheck

import { adjustColor } from "@sonnat/ui/styles/colorUtils";
import createTheme, { Theme } from "@sonnat/ui/styles/createTheme";
import defaultTheme from "@sonnat/ui/styles/defaultTheme";

export interface CustomizedTheme extends Theme {
  custom: {
    colors: {
      primaryHover: string;
      primaryActive: string;
    };
  };
}

// Create a theme instance.
const theme = createTheme({
  direction: "rtl",
  custom: {
    colors: {
      primaryHover: adjustColor(defaultTheme.colors.primary.origin, {
        saturation: -8,
        lightness: +8
      }),
      primaryActive: adjustColor(defaultTheme.colors.primary.origin, {
        saturation: +8,
        lightness: -4
      })
    }
  }
});

export default theme;
