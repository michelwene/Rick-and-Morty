import * as S from "./styles";

interface CardProps {
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function CardWrapper({
  children,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  return (
    <S.Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </S.Container>
  );
}
