import * as S from "./styles";

interface CardCoverProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export function CardCover({ src, alt, onClick }: CardCoverProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Image src={src} alt={alt} />
    </S.Container>
  );
}
