import * as S from "./styles";

interface CloseButtonProps {
  onClick: () => void;
}
export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <S.CloseButton onClick={onClick}>
      <S.CloseIcon />
    </S.CloseButton>
  );
}
