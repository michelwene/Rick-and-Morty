import { Character } from "@/graphql/generated/graphql";
import ModalLayout from "../ModalLayout";
import { ModalLayoutProps } from "../ModalLayout/types";

type ModalDetailCharacterProps = ModalLayoutProps & {
  character: Character;
};

export function ModalDetailCharacter({
  handleClose,
  isShow,
  character,
}: ModalDetailCharacterProps) {
  return (
    <ModalLayout
      handleClose={handleClose}
      isShow={isShow}
      title={character.name!}
    >
      teste
    </ModalLayout>
  );
}
