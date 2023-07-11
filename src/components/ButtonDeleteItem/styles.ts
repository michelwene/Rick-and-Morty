import { styled } from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -10px;
`;

export const Button = styled.button`
  background-color: #fff;

  border: none;
  border-radius: 6px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    color: red;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  font-size: 20px;
`;
