// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // keep the manually adjusted white
    10: "#f6f6f6", // keep the manually adjusted light grey
    50: "#142c4e", // light shade of your primary color
    100: "#142c4e", // same as primary color
    200: "#142c4e", // same as primary color
    300: "#142c4e", // same as primary color
    400: "#142c4e", // same as primary color
    500: "#142c4e", // primary color
    600: "#142c4e", // same as primary color
    700: "#142c4e", // same as primary color
    800: "#142c4e", // same as primary color
    900: "#142c4e", // same as primary color
    1000: "#000000", // keep the manually adjusted black
  },
  primary: {
    // blue (your specified color #142c4e)
    100: "1e222b", // lighter shade of #142c4e
    200: "#a7b5c3",
    300: "#7c90a5",
    400: "#506b87",
    500: "1e222b", // your primary color
    600: "#11243e",
    700: "#0d1b2f",
    800: "#09131f",
    900: "#050a10",
  },
  secondary: {
    // yellow-orange (#ffb15f)
    50: "#fff4e0",
    100: "#ffebc2",
    200: "#ffe2a3",
    300: "#ffd984",
    400: "#ffd066",
    500: "#ffb15f", // your secondary color
    600: "#cc8e4c",
    700: "#996a39",
    800: "#664726",
    900: "#332313",
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
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
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
