import * as S from "./styles";

interface CardCoverProps {
  src: string;
  alt: string;
}

export function CardCover({ src, alt }: CardCoverProps) {
  return (
    <S.Container>
      <S.Image src={src} alt={alt} />
    </S.Container>
  );
}
