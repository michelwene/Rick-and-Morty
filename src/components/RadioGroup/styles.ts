import { styled } from "styled-components";

export const Container = styled.div``;

export const RadioLabel = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semiBold};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  align-items: center;

  margin-bottom: ${({ theme }) => theme.spacing.margins.marginMD};
`;

export const Wrapper = styled.div``;
