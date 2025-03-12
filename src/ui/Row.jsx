import styled, { css } from "styled-components";

const StyledRow = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

function Row({ children, type = "vertical" }) {
  return <StyledRow type={type}>{children}</StyledRow>;
}

export default Row;
