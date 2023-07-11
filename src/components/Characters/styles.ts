import { styled } from "styled-components";

export const Container = styled.ul`
  row-gap: ${({ theme }) => theme.spacing.margins.marginMD};
  column-gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  ${({ theme }) => {
    return `@media (max-width: ${theme.breakpoints.sm}) {
      row-gap: ${theme.spacing.margins.marginSM};
      column-gap: 8px;
      justify-content: center;
    }`;
  }}
`;
