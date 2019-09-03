const TABLET_BREAKPOINT = "768px";
const MOBILE_BREAKPOINT = "425px";

const theme = {
  fontSize: {
    default: "18px"
  },
  fontWeight: {
    default: "400"
  },
  color: {
    white: "#FFFFFF"
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
