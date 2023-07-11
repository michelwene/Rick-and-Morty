import * as S from "./styles";

interface CardProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function CardWrapper({ children, onClick }: CardProps) {
  return <S.Container onClick={onClick}>{children}</S.Container>;
}
