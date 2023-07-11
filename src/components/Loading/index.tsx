import * as S from "./styles";

interface SpinProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export function Spin({ size = "medium", color }: SpinProps) {
  return (
    <S.LoadingContainer>
      <S.LoadingIcon sizeIcon={size} color={color} />
    </S.LoadingContainer>
  );
}
