import { styled } from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

interface SpinProps {
  sizeIcon?: "small" | "medium" | "large";
  color?: string;
}

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const LoadingIcon = styled(AiOutlineLoading)<SpinProps>`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${({ sizeIcon }) => {
    if (sizeIcon === "small") {
      return `
      font-size: 15px;
      `;
    }
    if (sizeIcon === "medium") {
      return `font-size: 20px;`;
    }
    if (sizeIcon === "large") {
      return `
      font-size: 30px;
      `;
    }
  }}
  color: ${({ theme, color }) => color ?? theme.colors.colorPrimary};
  /* font-size: ${({ size }) => (size === "medium" ? "20px" : "30px")} */
  animation: spin 1s linear infinite;
`;
