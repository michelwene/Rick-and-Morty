import { CharactersQuery } from "@/graphql/generated/graphql";
import * as S from "./styles";
import { Card } from "../Card";
interface CharactersProps {
  characters: CharactersQuery["characters"];
}

export function Characters({ characters }: CharactersProps) {
  return (
    <S.Container>
      {characters?.results?.length === 0 && <p>Nenhum personagem encontrado</p>}
      {characters?.results?.map((character) => (
        <Card.Wrapper key={character?.id}>
          <Card.Cover src={character?.image!} alt={character?.name!} />
          <Card.Body
            title={character?.name!}
            descriptions={[character?.status!, character?.location?.name!]}
          />
        </Card.Wrapper>
      ))}
    </S.Container>
  );
}
