import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
interface CardBodyProps {
  title: string;
  descriptions: string[];
  onClick: () => void;
}

export function CardBody({ title, descriptions, onClick }: CardBodyProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Content>
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          {descriptions.map((item) => {
            const id = uuidv4();
            return <S.Description key={id}>{item}</S.Description>;
          })}
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
}
