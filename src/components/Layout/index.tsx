import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <S.Container>{children}</S.Container>;
}
