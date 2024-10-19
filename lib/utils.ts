import {AxiosError} from "axios";
import {clsx, type ClassValue} from "clsx";
import {toast} from "sonner";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const displayErrorMessage = (errorData: AxiosError<any>, toastId?: string | number) => {
  if (errorData.message === "Network Error") {
    toast.error("Please check your internet connection");

    return;
  }

  const {message} = errorData.response?.data || {};

  toast.error(capitalizeFirstLetter(message), {
    id: toastId ?? "",
  });
};

export function getFirstLetter(string = "") {
  return string.charAt(0);
}

export function capitalizeFirstLetter(string = "") {
  string = String(string);

  return getFirstLetter(string)?.toUpperCase() + string.toLowerCase()?.slice(1);
}
