import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren {
  target: string;
}

const Portal: FC<PortalProps> = ({ target, children }) => {
  return createPortal(children, document.getElementById(target)!);
};

export default Portal;
