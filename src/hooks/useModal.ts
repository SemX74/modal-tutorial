import { useEffect, useState } from "react";

type ModalAnimation = "in" | "out";

export interface ModalProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  animation: ModalAnimation;
}

const useModal = (): ModalProps => {
  const [open, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState<ModalAnimation>("in");

  useEffect(() => {
    if (open) {
      setAnimation("in");
    }
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setAnimation("out");
    setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    open,
    onOpen: handleOpenModal,
    onClose: handleCloseModal,
    animation,
  };
};

export default useModal;
