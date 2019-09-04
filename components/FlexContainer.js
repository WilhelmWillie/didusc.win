import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? align : "auto")};
  justify-content: ${({ justify }) => (justify ? justify : "auto")};
`;

export default FlexContainer;
