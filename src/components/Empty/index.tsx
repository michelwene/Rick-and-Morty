import * as S from "./styles";

interface EmptyProps {
  message: string;
}
export function Empty({ message }: EmptyProps) {
  return (
    <S.Container>
      <S.SmileIcon />
      <S.EmptyText>{message}</S.EmptyText>
    </S.Container>
  );
}
