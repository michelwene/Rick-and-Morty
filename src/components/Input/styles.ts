import { styled } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const InputWrapper = styled.div`
  display: flex;

  margin-bottom: ${({ theme }) => theme.spacing.margins.marginMD};
`;

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  border-radius: 6px 0 0 6px;
  color: ${({ theme }) => theme.colors.colorText};
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};

  flex: 1;

  transition: all 0.2s;

  padding: 4px 11px;
  &:hover {
    border-color: ${({ theme }) => theme.colors.colorPrimaryBorder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.colorPrimaryBorder};
    box-shadow: 0 0 0 1.5px
      ${({ theme }) => theme.colors.colorPrimaryBorderHover};

    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.colorPrimary};

  color: #fff;
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeLG};

  border-radius: 0 6px 6px 0;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  padding: 4px 15px;

  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  outline: none;

  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.colorPrimaryHover};
  }

  &:active {
    filter: brightness(0.8);
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.colorPrimaryBorderHover};
  }
`;

export const Icon = styled(AiOutlineSearch)``;
