import { Character } from "@/graphql/generated/graphql";
import ModalLayout from "../ModalLayout/ModalLayout";
import { ModalLayoutProps } from "../ModalLayout/types";
import * as S from "./styles";
import { format } from "date-fns";

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
      title={"Character details"}
    >
      <S.Container>
        <S.ContentWrapperImage>
          <S.WrapperImage>
            <S.Cover src={character.image!} alt={character.name!} />
          </S.WrapperImage>
          <S.Content>
            <S.WrapperInfoItem>
              <S.Caption>Name:</S.Caption>
              <S.Subtitle>{character.name}</S.Subtitle>
            </S.WrapperInfoItem>
            <S.WrapperInfoItem>
              <S.Caption>Status:</S.Caption>
              <S.Subtitle>{character.status}</S.Subtitle>
            </S.WrapperInfoItem>
            <S.WrapperInfoItem>
              <S.Caption>Type:</S.Caption>
              <S.Subtitle>{character.type || " - "}</S.Subtitle>
            </S.WrapperInfoItem>
            <S.WrapperInfoItem>
              <S.Caption>Created:</S.Caption>
              <S.Subtitle>{character.created || " - "}</S.Subtitle>
            </S.WrapperInfoItem>
            <S.WrapperInfoItem>
              <S.Caption>Gender:</S.Caption>
              <S.Subtitle>{character.gender || " - "}</S.Subtitle>
            </S.WrapperInfoItem>
          </S.Content>
        </S.ContentWrapperImage>
        <S.WrapperInfo>
          <S.Caption>Location:</S.Caption>
          <S.WrapperInfoItem>
            <S.Caption>- Name:</S.Caption>
            <S.Subtitle>{character.location?.name || " - "}</S.Subtitle>
          </S.WrapperInfoItem>
          <S.WrapperInfoItem>
            <S.Caption>- Dimension:</S.Caption>
            <S.Subtitle>{character.location?.dimension || " - "}</S.Subtitle>
          </S.WrapperInfoItem>
          <S.WrapperInfoItem>
            <S.Caption>- Type:</S.Caption>
            <S.Subtitle>{character.location?.type || " - "}</S.Subtitle>
          </S.WrapperInfoItem>
          <S.WrapperInfoItem>
            <S.Caption>- Created:</S.Caption>
            <S.Subtitle>
              {character.location?.created
                ? format(new Date(character.location.created), "yyyy-MM-dd")
                : " - "}
            </S.Subtitle>
          </S.WrapperInfoItem>
        </S.WrapperInfo>
      </S.Container>
    </ModalLayout>
  );
}
