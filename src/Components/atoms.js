import { atom } from "recoil";

export const GC2_URL = atom({
  key: "GC2_URL",
  default: "http://ec2-3-34-237-26.ap-northeast-2.compute.amazonaws.com",
});

export const LoginAuthToken = atom({
  key: "LoginAuthToken",
  default: "",
});
