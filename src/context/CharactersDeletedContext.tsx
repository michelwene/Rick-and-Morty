import { Character } from "@/graphql/generated/graphql";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

type CharactersContextType = {
  charactersDeleted: string[];
  onDeleteCharacter: (character: Character) => void;
};

export const CharactersDeletedContext = createContext<CharactersContextType>(
  {} as CharactersContextType
);

interface CharactersDeletedProviderProviderProps {
  children: React.ReactNode;
}

export function CharactersDeletedProvider({
  children,
}: CharactersDeletedProviderProviderProps) {
  const [charactersDeleted, setCharactersDeleted] = useState<string[]>([]);

  const onDeleteCharacter = (character: Character) => {
    toast("Character deleted", { type: "success" });
    setCharactersDeleted((prev) => [...prev, character.id!]);
  };

  const values = {
    charactersDeleted,
    onDeleteCharacter,
  };
  return (
    <CharactersDeletedContext.Provider value={values}>
      {children}
    </CharactersDeletedContext.Provider>
  );
}

export const useCharactersDeleted = () => useContext(CharactersDeletedContext);
