import * as S from "./styles";
import { Spin } from "../Loading";
import ModalLayout from "../ModalLayout/ModalLayout";
import { Modal } from "../ModalLayout/index";

export interface ModalConfirmationDelectionProps {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
  isLoading?: boolean;
  title?: string;
}

export default function ModalConfirmationDelection({
  onCancel,
  onConfirm,
  isOpen,
  text,
  title,
  isLoading,
}: ModalConfirmationDelectionProps) {
  const handleClickOutside = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };
  return (
    <Modal.Backdrop isShow={isOpen} onClick={handleClickOutside}>
      <Modal.Header>
        <S.WrapperTitle>
          <S.ExclamationIcon />
          <Modal.Title>{title}</Modal.Title>
        </S.WrapperTitle>
      </Modal.Header>
      <S.Text>{text}</S.Text>
      <S.WrapperButtons>
        <S.ButtonCancel
          onClick={onCancel}
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLoading && <Spin />}
          Cancel
        </S.ButtonCancel>
        <S.ButtonConfirm
          onClick={onConfirm}
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLoading && <Spin color="#fff" />}
          OK
        </S.ButtonConfirm>
      </S.WrapperButtons>
    </Modal.Backdrop>
  );
}
