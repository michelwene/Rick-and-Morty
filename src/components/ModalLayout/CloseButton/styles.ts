import { AiOutlineClose } from "react-icons/ai";
import { styled } from "styled-components";

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
