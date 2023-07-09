import * as S from "./styles";

interface CardProps {
  children: React.ReactNode;
}

export function CardWrapper({ children }: CardProps) {
  return <S.Container>{children}</S.Container>;
}
