import { styled } from "styled-components";

export const EmptyText = styled.p`
  color: ${({ theme }) => theme.colors.colorText};
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeLG};

  text-align: center;
  flex: 1;
`;
