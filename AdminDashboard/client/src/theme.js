// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    // Update grey tokens to bluish colors
    100: "#d1d8f0",
    200: "#a3b1e0",
    300: "#7499d0",
    400: "#4671c0",
    500: "#184ab0",
    600: "#153e99",
    700: "#133283",
    800: "#10276c",
    900: "#0d1b55",
    1000: "#000000",
  },
  primary: {
    // bluish and lightish colors
    100: "#d1d8f0",
    200: "#a3b1e0",
    300: "#7499d0",
    400: "#4671c0",
    500: "#184ab0",
    600: "#153e99",
    700: "#133283",
    800: "#10276c",
    900: "#0d1b55",
  },
  secondary: {
    // lighter bluish color
    50: "#f9fbff",
    100: "#d6e8ff",
    200: "#b2d5ff",
    300: "#8fc3ff",
    400: "#6cb0ff",
    500: "#489dff",
    600: "#258aff",
    700: "#0278ff",
    800: "#0165e1",
    900: "#0052c3",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: "#4C8BF5", // Modern blue
              light: "#7DAEFB", // Lighter shade of Modern blue
            },
            secondary: {
              ...tokensDark.secondary,
              main: "#F5CC48", // Modern yellow
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: "#282c34", // Dark background color
              alt: "#1e222b", // Alternate dark background color
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: "#F5CC48", // Modern yellow
              light: "#FFE799", // Lighter shade of Modern yellow
            },
            secondary: {
              ...tokensLight.secondary,
              main: "#4C8BF5", // Modern blue
              light: "#7DAEFB", // Lighter shade of Modern blue
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
