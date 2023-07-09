import { Characters } from "@/graphql/generated/graphql";
import * as S from "./styles";
import { Card } from "../Card";
interface CharactersProps {
  characters: Characters["results"];
}

export function Characters({ characters }: CharactersProps) {
  return (
    <S.Container>
      {characters?.map((character) => (
        <Card.Wrapper key={character?.id}>
          <Card.Cover src={character?.image!} alt={character?.name!} />
          <Card.Body />
        </Card.Wrapper>
      ))}
    </S.Container>
  );
}
