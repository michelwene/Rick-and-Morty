import * as S from "./styles";

interface ButtonDeleteItemProps {
  onClick: (event: React.MouseEvent) => void;
}

export function ButtonDeleteItem({ onClick }: ButtonDeleteItemProps) {
  return (
    <S.Container onClick={onClick} id="button-delete">
      <S.Button>
        <S.DeleteIcon />
      </S.Button>
    </S.Container>
  );
}
