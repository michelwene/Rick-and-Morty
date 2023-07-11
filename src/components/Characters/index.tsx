import {
  Character as CharacterType,
  CharactersQuery,
} from "@/graphql/generated/graphql";
import * as S from "./styles";
import { EmptyText } from "../Empty/styles";
import { useState } from "react";
import { Character } from "./Character";
interface CharactersProps {
  characters: CharactersQuery["characters"];
}

export function Characters({ characters }: CharactersProps) {
  return (
    <S.Container>
      {characters?.results?.length === 0 && (
        <EmptyText>No characters found</EmptyText>
      )}
      {characters?.results?.map((character) => (
        <Character key={character?.id} character={character as CharacterType} />
      ))}
    </S.Container>
  );
}
