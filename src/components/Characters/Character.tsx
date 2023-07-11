import { Card } from "../Card";
import { Character as CharacterType } from "@/graphql/generated/graphql";
import { ModalDetailCharacter } from "../ModalDetailCharacter";
import { useState, useCallback } from "react";

interface CharacterProps {
  character: CharacterType;
}
export function Character({ character }: CharacterProps) {
  const [isOpenModalDetailCharacter, setIsOpenModalDetailCharacter] =
    useState(false);

  const handleOpenModalDetailCharacter = useCallback(() => {
    setIsOpenModalDetailCharacter(true);
  }, []);

  const handleCloseModalDetailCharacter = useCallback(() => {
    setIsOpenModalDetailCharacter(false);
  }, []);
  return (
    <>
      <Card.Wrapper
        key={character?.id}
        onClick={handleOpenModalDetailCharacter}
      >
        <Card.Cover src={character?.image!} alt={character?.name!} />
        <Card.Body
          title={character?.name!}
          descriptions={[character?.status!, character?.location?.name!]}
        />
      </Card.Wrapper>
      {isOpenModalDetailCharacter && (
        <ModalDetailCharacter
          character={character}
          isShow={isOpenModalDetailCharacter}
          handleClose={handleCloseModalDetailCharacter}
        />
      )}
    </>
  );
}
