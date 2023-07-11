import { styled } from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  min-width: 0;

  row-gap: ${({ theme }) => theme.spacing.margins.marginMD};
  column-gap: 16px;

  ${({ theme }) => {
    return `@media (max-width: ${theme.breakpoints.sm}) {
      row-gap: ${theme.spacing.margins.marginSM};
      column-gap: 8px;
      justify-content: center;
    }`;
  }}
`;
