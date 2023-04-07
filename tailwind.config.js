module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        navLinks: "0px 5px 10px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        accentColor: "#FF5E5E",
        accentColorHover: "#ff8686",
        primary900: "#242942",
        bgColor: "#EDF2F6",
      },
      fontFamily: {
        mainFont: ["Barlow Condensed", "sans-serif"],
        bodyFont: ["Barlow", "sans-serif"],
      },
      fontSize: {
        linkFont: [
          "clamp(1.125rem, 1.2102rem + -0.3636vw, 0.9375rem)",
          {
            LineHeight: "1.2",
            letterSpacing: "0.06em",
          },
        ],
        fontHeading: ["clamp(2.5rem, 1.8182rem + 2.9091vw, 4rem)"],
        btnFont: [
          "clamp(0.875rem, 0.8182rem + 0.2424vw, 1rem)",
          {
            letterSpacing: "0.07em",
          },
        ],
        btnFontSmall: ["clamp(0.875rem, 0.8466rem + 0.1212vw, 0.9375rem)"],
        base: ["18px"],
        xs: ["15px"],
      },
      lineHeight: {
        snug: "1.2",
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
