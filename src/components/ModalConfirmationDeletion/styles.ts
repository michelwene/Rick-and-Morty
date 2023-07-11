import styled from "styled-components";

interface IModalProps {
  isLoading?: boolean;
}

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  font-weight: 500;
`;

export const WrapperButtons = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  justify-content: flex-end;

  margin-top: 1rem;
`;

export const ButtonCancel = styled.button<IModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);

  color: ${({ theme }) => theme.colors.colorText};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  font-weight: 500;

  padding: 4px 15px;
  outline: none;
  transition: filter 0.2s;

  height: 32px;

  opacity: ${({ isLoading }) => isLoading && "0.5"};

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

export const ButtonConfirm = styled.button<IModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  background-color: ${({ theme }) => theme.colors.colorPrimary};
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);

  color: #fff;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  font-weight: 500;

  padding: 4px 16px;
  outline: none;
  transition: filter 0.2s;

  height: 32px;

  opacity: ${({ isLoading }) => isLoading && "0.5"};

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
