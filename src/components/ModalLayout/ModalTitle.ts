import { styled } from "styled-components";

export const ModalTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeLG};
  color: ${({ theme }) => theme.colors.colorText};
  font-weight: 600;
  line-height: 1.5;
  word-wrap: break-word;
`;
