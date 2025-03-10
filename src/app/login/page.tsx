import LoginComp from "./LoginComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Войти",
  description: "Здесь вы можете войти в свой аккаунт",
};

export default function Login() {
  return (
    <>
      <LoginComp />
    </>
  );
}