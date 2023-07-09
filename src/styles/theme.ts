const theme = {
  fonts: {
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
    fontSize: {
      fontSizeRegular: "1rem",
      fontSizeSM: "085rem",
      fontSizeLG: "1.15rem",
      fontSizeXL: "1.25rem",
      fontSizeHeading: "2.72rem",
    },
  },
  colors: {
    title: "rgba(0,0,0,0.85)",
    colorText: "rgba(0,0,0,0.65)",
    colorTextsecondary: "rgba(0,0,0,0.45)",
    disable: "rgba(0,0,0,0.25)",
    colorBorder: "#d9d9d9",
    divider: "rgba(0,0,0,0.12)",
    background: "rgba(0,0,0,0.04)",
    colorBgLayout: "#f5f5f5",
    TableHeader: "rgba(0,0,0,0.12)",
    colorPrimaryBg: "#f6ffed",
    colorPrimaryBgHover: "#d9f7be",
    colorPrimaryBorder: "#b7eb8f",
    colorPrimaryBorderHover: "rgba(149,222,100, 0.2)",
    colorPrimaryHover: "#73d13d",
    colorPrimary: "#52c41a",
    colorPrimaryActive: "#389e0d",
  },
  spacing: {
    margins: {
      marginXXS: "4px",
      marginSM: "12px",
      margin: "16px",
      marginMD: "24px",
      marginXL: "32px",
      marginXXL: "48px",
    },
    paddings: {
      paddingXXS: "4px",
      paddingXS: "8px",
      paddingSM: "12px",
      padding: "16px",
      paddingMD: "24px",
      paddingXL: "32px",
    },
  },

  // media queries

  breakpoints: {
    xs: "0px",
    sm: "620px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
} as const;

export default theme;
