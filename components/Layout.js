import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 64px;
  padding-bottom: 64px;
`;

export default Layout;
