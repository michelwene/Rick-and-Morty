import { styled } from "styled-components";

export const Container = styled.div``;

export const RadioLabel = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fonts.fontSize.fontSizeRegular};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semiBold};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  align-items: center;

  margin-bottom: ${({ theme }) => theme.spacing.margins.marginMD};
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const Input = styled.input`
  cursor: pointer;
  &:after {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 0;
    left: -2px;
    position: relative;
    background-color: #fff;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 1px solid #d9d9d9;
  }

  &:checked:after {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 0;
    left: -2px;
    position: relative;
    background-color: #fff;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 5px solid ${({ theme }) => theme.colors.colorPrimary};
  }
`;

export const Label = styled.label`
  cursor: pointer;
`;
