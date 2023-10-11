interface Theme {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  btn: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  "btn-shadow": {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  "btn-hover": {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const themes = {
  themeOne: {
    background: {
      primary: "#3B4664",
      secondary: "#252D44",
      tertiary: "#181F32",
    },
    text: {
      primary: "#484E61",
      secondary: "#FFF8FF",
      tertiary: "#FFFBF3",
    },
    btn: {
      primary: "#EAE3DB",
      secondary: "#647299",
      tertiary: "#D13F30",
    },
    "btn-hover": {
      primary: "#FFFFFF",
      secondary: "#A2B3E1",
      tertiary: "#F96C5B",
    },
    "btn-shadow": {
      primary: "#B6A49A",
      secondary: "#414E71",
      tertiary: "#8E2517",
    },
  },
  themeTwo: {
    background: {
      primary: "#E6E6E6",
      secondary: "#D3CDCD",
      tertiary: "#EEEEEE",
    },
    text: {
      primary: "#37372E",
      secondary: "#FFFBF3",
      tertiary: "#FFFBF3",
    },
    btn: {
      primary: "#E5E4E0",
      secondary: "#388187",
      tertiary: "#C65401",
    },
    "btn-hover": {
      primary: "#FFFFFF",
      secondary: "#63B4BD",
      tertiary: "#FF8B38",
    },
    "btn-shadow": {
      primary: "#A69F90",
      secondary: "#1C6167",
      tertiary: "#893A02",
    },
  },
  themeThree: {
    background: {
      primary: "#17062A",
      secondary: "#1E0836",
      tertiary: "#1E0836",
    },
    text: {
      primary: "#FFE63C",
      secondary: "#FFF8FF",
      tertiary: "#0C272F",
    },
    btn: {
      primary: "#331B4D",
      secondary: "#57067C",
      tertiary: "#00DECF",
    },
    "btn-hover": {
      primary: "#6B34AC",
      secondary: "#8631AF",
      tertiary: "#94FFF9",
    },
    "btn-shadow": {
      primary: "#851E9D",
      secondary: "#BF16F5",
      tertiary: "#68FCF2",
    },
  },
};

export type { Theme };
export default themes;
