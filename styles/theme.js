const TABLET_BREAKPOINT = "768px";
const MOBILE_BREAKPOINT = "425px";

const theme = {
  fontSize: {
    default: "18px",
    subheading: "20px",
    heading: "32px",
    header: "60px",
    max: "80px"
  },
  fontWeight: {
    default: "400"
  },
  color: {
    white: "#FFFFFF",
    darkText: "#1F1F1F",
    bg: "#1B1B1B",
    gold: "#FFC82F",
    red: "#AB0831"
  },
  media: {
    tablet: style => `
      @media screen and (max-width: ${TABLET_BREAKPOINT}) {
        ${style}
      }
    `,
    mobile: style => `
      @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
        ${style}
      }
    `
  }
};

export default theme;
