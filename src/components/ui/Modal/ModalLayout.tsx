import { FC, PropsWithChildren } from "react";
import { ModalProps } from "../../../hooks/useModal";
import Portal from "../../common/Portal";
import { cn } from "../../../helpers/cn";

interface ModalLayoutProps extends PropsWithChildren<ModalProps> {}

const ModalLayout: FC<ModalLayoutProps> = ({
  onClose,
  open,
  animation,
  children,
}) => {
  if (!open) return null;

  return (
    <Portal target="modals-root">
      <div
        onClick={onClose}
        className={cn(
          "h-screen overscroll-none z-50 top-0 left-0 w-full bg-black/30 flex justify-center items-center fixed",
          animation === "out" ? `animate-fade-out` : "animate-fade-in"
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black max-w-xl w-full p-5 rounded-xl shadow-xl"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};




export default ModalLayout;
