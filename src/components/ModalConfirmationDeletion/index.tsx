import * as S from "./styles";
import { Spin } from "../Loading";
import ModalLayout from "../ModalLayout";

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
  return (
    <ModalLayout
      title={title}
      isShow={isOpen}
      handleClose={isLoading ? undefined : onCancel}
    >
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
    </ModalLayout>
  );
}
