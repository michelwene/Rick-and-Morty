import { ModalLayoutProps } from "./types";
import { Modal } from ".";

export default function ModalLayout({
  isShow,
  handleClose = () => {},
  children,
  title = "",
}: ModalLayoutProps) {
  const handleClickOutside = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  return (
    <Modal.Backdrop isShow={isShow} onClick={handleClickOutside}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Modal.CloseButton onClick={handleClose} />
      </Modal.Header>
      {children}
    </Modal.Backdrop>
  );
}
