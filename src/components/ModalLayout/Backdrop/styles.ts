import { styled } from "styled-components";

interface ModalProps {
  isShow: boolean;
}

export const Backdrop = styled.div<ModalProps>`
  z-index: 1000;
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
  background: #fff;
  min-width: 33%;
  height: auto;
  max-height: 50vh;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  padding: 20px 24px;

  overflow-y: hidden;

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;
