import * as S from "./styles";
import { ModalLayoutProps } from "./types";

export default function ModalLayout({
  isShow,
  handleClose,
  children,
  title = "",
}: ModalLayoutProps) {
  const handleClickOutside = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  return (
    <S.Backdrop
      isShow={isShow}
      onClick={(event: any) => handleClickOutside(event)}
    >
      <S.Container>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.CloseButton onClick={handleClose}>
            <S.CloseIcon />
          </S.CloseButton>
        </S.ModalHeader>
        {children}
      </S.Container>
    </S.Backdrop>
  );
}
