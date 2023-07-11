import { styled } from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const ContentWrapperImage = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-flow: row wrap;
`;

export const WrapperImage = styled.div`
  max-width: 240px;

  ${({ theme }) => {
    return `@media (max-width: ${theme.breakpoints.sm}) {
      max-width: 100%;
      width: 100%;
      margin-bottom: ${theme.spacing.margins.margin};
    
    }`;
  }}
`;

export const Cover = styled.img`
  border-radius: 8px 8px 0 0;
  overflow-clip-margin: content-box;
  overflow: clip;

  width: 100%;
`;

export const Content = styled.div``;

export const WrapperInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.margins.margin};
`;

export const WrapperInfoItem = styled.div`
  display: flex;
  align-items: first baseline;
  margin-bottom: 16px;
  gap: 8px;
`;

export const Caption = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeSM};
  color: ${({ theme }) => theme.colors.colorText};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semiBold};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeLG};
  color: ${({ theme }) => theme.colors.colorText};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
