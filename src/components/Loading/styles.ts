import { styled } from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const LoadingIcon = styled(AiOutlineLoading)`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-size: 30px;
  animation: spin 1s linear infinite;
`;
