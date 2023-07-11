import { Card } from "../Card";
import { Character as CharacterType } from "@/graphql/generated/graphql";
import { ModalDetailCharacter } from "../ModalDetailCharacter";
import { useState, useCallback } from "react";
import { ButtonDeleteItem } from "../ButtonDeleteItem";
import ModalConfirmationDelection from "../ModalConfirmationDeletion";
import { useCharactersDeleted } from "@/context/CharactersDeletedContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CharacterProps {
  character: CharacterType;
}

export function Character({ character }: CharacterProps) {
  const isMobile = useMediaQuery("(max-width: 620px)");

  const [isOpenModalDetailCharacter, setIsOpenModalDetailCharacter] =
    useState(false);
  const [isOpenModalDeletion, setIsOpenModalDeletion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowButtonDelete, setIsShowButtonDelete] = useState(false);
  const { onDeleteCharacter } = useCharactersDeleted();

  const handleOpenModal = () => {
    setIsOpenModalDetailCharacter(true);
  };

  const handleCloseModalDetailCharacter = () => {
    setIsOpenModalDetailCharacter(false);
  };

  const handleOpenModalDeletion = () => {
    setIsOpenModalDeletion(true);
  };

  const handleCloseModalDeletion = () => {
    setIsOpenModalDeletion(false);
  };

  const handleDeleteCharacter = () => {
    setIsLoading(true);
    setTimeout(() => {
      onDeleteCharacter(character);
      setIsLoading(false);
      handleCloseModalDeletion();
    }, 3000);
  };

  return (
    <>
      <Card.Wrapper
        key={character?.id}
        onMouseEnter={() => setIsShowButtonDelete(true)}
        onMouseLeave={() => setIsShowButtonDelete(false)}
      >
        <Card.Cover
          src={character?.image!}
          alt={character?.name!}
          onClick={handleOpenModal}
        />
        <Card.Body
          onClick={handleOpenModal}
          title={character?.name!}
          descriptions={[character?.status!, character?.location?.name!]}
        />
        {isShowButtonDelete && !isMobile && (
          <ButtonDeleteItem onClick={handleOpenModalDeletion} />
        )}
        {isMobile && <ButtonDeleteItem onClick={handleOpenModalDeletion} />}
      </Card.Wrapper>
      {isOpenModalDetailCharacter && (
        <ModalDetailCharacter
          character={character}
          isShow={isOpenModalDetailCharacter}
          handleClose={handleCloseModalDetailCharacter}
        />
      )}
      {isOpenModalDeletion && (
        <ModalConfirmationDelection
          onCancel={handleCloseModalDeletion}
          isOpen={isOpenModalDeletion}
          title="Do you want to delete this character?"
          text="This action cannot be undone."
          isLoading={isLoading}
          onConfirm={handleDeleteCharacter}
        />
      )}
    </>
  );
}
