import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 0 0 8px 8px;
  padding: ${({ theme }) => theme.spacing.paddings.paddingMD};
`;

export const Content = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.colorText};
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeLG};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semiBold};

  margin-bottom: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.colorTextsecondary};
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
`;
