"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

import {useWhoAmI} from "./whoami";

const logIn = async (payload: LogInPayload) => {
  const {data} = await api.post<QueryResponse<LoginResponse>>(API_ENDPOINTS.AUTH.LOGIN, payload);

  return data;
};

export const useLogIn = (
  verifyRedirect: string,
  pageRedirect: string,
): UseMutationResult<QueryResponse<LoginResponse>, AxiosError<ErrorData>, LogInPayload> => {
  const router = useRouter();
  const {fetchWhoAmI} = useWhoAmI();
  const redirectTo = sessionStorage.getItem("redirectLink");

  return useMutation({
    mutationFn: logIn,
    onSuccess: (data) => {
      showSuccess(data.message);
      if (data.message !== "Login Successful!") {
        router.push(`${verifyRedirect}?email=${data.email}`);

        return;
      }
      const expirationOptions = data.data.rememberMe
        ? {expires: 365}
        : {expires: new Date(new Date().setHours(new Date().getHours() + 2))};

      Cookies.set("spacefinda-token", data.data.token, {
        secure: true,
        sameSite: "Strict",
        ...expirationOptions,
      });

      fetchWhoAmI && fetchWhoAmI();

      if (redirectTo) {
        router.push(redirectTo);
        sessionStorage.removeItem("redirectLink");

        return;
      } else {
        router.push(pageRedirect);
      }
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};

type LogInPayload = {
  email: string;
  password: string;
  source: "business" | "client";
  rememberMe: boolean;
};

export interface LoginResponse {
  user: {
    _id: string;
    fullname: string;
    email: string;
    phone: string;
    role: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };
  token: string;
  rememberMe: boolean;
  message: string;
  success: boolean;
}
