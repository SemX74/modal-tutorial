import { ComponentProps, FC } from "react";
import { cn } from "../../../helpers/cn";

interface ModalTitleProps extends ComponentProps<"div"> {}

const ModalTitle: FC<ModalTitleProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "border-b p-4 flex text-lg font-semibold test-start items-center gap-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ModalTitle;
