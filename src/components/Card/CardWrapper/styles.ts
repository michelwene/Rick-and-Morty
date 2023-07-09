import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.colorText};
  border: 1px solid "#f0f0f0";
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  width: 240px;

  transition: box-shadow 0.2s ease-in-out, border-color 0.2s;

  &:hover {
    cursor: pointer;
  }
`;
