import { styled } from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdFirstPage, MdLastPage } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  margin-top: ${({ theme }) => theme.spacing.margins.marginMD};
`;

export const Wrapper = styled.ul`
  align-items: center;
  justify-content: center;
  display: flex;

  column-gap: 8px;

  width: 100%;
`;

export const WrapperButtonsIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li``;

export const ButtonPage = styled.button<{ isSelected: boolean }>`
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  outline: none;

  height: 32px;
  width: 32px;

  ${({ isSelected, theme }) =>
    isSelected &&
    `
    color: ${theme.colors.colorPrimary};
    border: 1px solid ${theme.colors.colorPrimary};
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  outline: none;

  height: 32px;
  width: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const LeftIcon = styled(AiOutlineLeft)``;

export const RightIcon = styled(AiOutlineRight)``;

export const FirstPageIcon = styled(MdFirstPage)`
  font-size: 18px;
`;

export const LastPageIcon = styled(MdLastPage)`
  font-size: 18px;
`;
