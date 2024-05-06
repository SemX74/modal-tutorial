import { ComponentProps, FC } from "react";
import { cn } from "../../../helpers/cn";

interface ModalFooterProps extends ComponentProps<"div"> {}

const ModalFooter: FC<ModalFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("border-t p-4 flex items-center gap-3", className)}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
