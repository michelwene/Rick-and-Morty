import * as S from "./styles";

interface BackdropContainerProps {
  children: React.ReactNode;
  isShow: boolean;
  onClick: (event: MouseEvent) => void;
}
export function BackdropContainer({
  children,
  isShow,
  onClick,
}: BackdropContainerProps) {
  return (
    <S.Backdrop isShow={isShow} onClick={(event: any) => onClick(event)}>
      <S.Container>{children}</S.Container>
    </S.Backdrop>
  );
}
