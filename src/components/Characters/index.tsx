import {
  Character as CharacterType,
  CharactersQuery,
} from "@/graphql/generated/graphql";
import * as S from "./styles";
import { Character } from "./Character";
import { Empty } from "../Empty";
import { useCharactersDeleted } from "@/context/CharactersDeletedContext";
interface CharactersProps {
  characters: CharactersQuery["characters"];
}

export function Characters({ characters }: CharactersProps) {
  const { charactersDeleted } = useCharactersDeleted();
  return (
    <>
      {characters?.results?.length === 0 && (
        <Empty message="No characters found" />
      )}
      <S.Container>
        {characters?.results
          ?.filter((character) => !charactersDeleted.includes(character?.id!))
          .map((character) => (
            <Character
              key={character?.id}
              character={character as CharacterType}
            />
          ))}
      </S.Container>
    </>
  );
}
