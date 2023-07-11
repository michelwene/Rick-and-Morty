import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isShow: boolean;
}

export const Backdrop = styled.div<ModalProps>`
  z-index: 999;
  display: ${({ isShow }) => (isShow ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.colorBgLayout};
  min-width: 33%;
  height: auto;
  max-height: 50vh;
  margin: 1rem 0;

  transition: transform 0.5s ease-in-out;

  transform: "translate(-50%,-50%)";

  border-radius: 10px;
  padding: 20px 24px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`;

export const ModalTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeLG};
  color: ${({ theme }) => theme.colors.colorText};
  font-weight: 600;
  line-height: 1.5;
  word-wrap: break-word;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  width: 22px;
  height: 22px;

  transition: filter 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.8);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  &:active {
    filter: brightness(0.6);
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 16px;
  line-height: 22px;
`;
