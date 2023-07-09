import styled from "styled-components";

export const Container = styled.li`
  color: ${({ theme }) => theme.colors.colorText};
  background-color: #fff;
  border: 1px solid "#f0f0f0";
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  width: 240px;

  transition: box-shadow 0.2s ease-in-out, border-color 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
