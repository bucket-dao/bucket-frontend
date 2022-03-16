import { DetailedHTMLProps, HTMLAttributes } from "react";
import { toast } from "react-toastify";

export const success = (
  msg:
    | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
    | string
) =>
  toast.success(msg, {
    autoClose: 5000,
    position: "bottom-left",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const error = (
  msg:
    | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
    | string
) => {
  toast.error(msg, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
