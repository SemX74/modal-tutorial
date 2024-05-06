import { ComponentProps, FC } from "react";
import { cn } from "../../../helpers/cn";

interface ModalBodyProps extends ComponentProps<"div"> {}

const ModalBody: FC<ModalBodyProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "p-4 flex justify-start items-start flex-col gap-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ModalBody;
