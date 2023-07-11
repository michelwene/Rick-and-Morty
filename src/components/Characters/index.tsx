import {
  Character as CharacterType,
  CharactersQuery,
} from "@/graphql/generated/graphql";
import * as S from "./styles";
import { Character } from "./Character";
import { Empty } from "../Empty";
interface CharactersProps {
  characters: CharactersQuery["characters"];
}

export function Characters({ characters }: CharactersProps) {
  return (
    <S.Container>
      {characters?.results?.length === 0 && (
        <Empty message="No characters found" />
      )}
      {characters?.results?.map((character) => (
        <Character key={character?.id} character={character as CharacterType} />
      ))}
    </S.Container>
  );
}
