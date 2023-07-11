import { styled } from "styled-components";
import { AiOutlineSmile } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const EmptyText = styled.p`
  color: ${({ theme }) => theme.colors.colorText};
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeLG};

  text-align: center;
  flex: 1;
`;

export const SmileIcon = styled(AiOutlineSmile)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.colorTextsecondary};
`;
