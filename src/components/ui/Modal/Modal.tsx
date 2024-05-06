import { FC, PropsWithChildren } from "react";
import { ModalProps } from "../../../hooks/useModal";
import ModalLayout from "./ModalLayout";
import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

interface ModalComponentProps extends PropsWithChildren<ModalProps> {}

const ModalComponent: FC<ModalComponentProps> = ({
  children,
  ...layoutProps
}) => {
  return <ModalLayout {...layoutProps}>{children}</ModalLayout>;
};

const Modal = Object.assign(ModalComponent, {
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
