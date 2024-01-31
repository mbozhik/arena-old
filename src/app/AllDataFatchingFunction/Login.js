"use server";
import axios from "axios";
import ApiUrl from "./ApiUrl";
import { cookies } from "next/headers";
export default async function StudentLogin(data, email) {
  try {
    const response = await axios.post(ApiUrl.SendLogin, data);
    // console.log(response);
    if (response.status === 200 && response.data.login === 2) {
      return {
        msg: response.data.msg,
        status: response.status,
        login: response.data.login,
      };
    } else if (response.status === 200 && response.data.login === 0) {
      return {
        msg: response.data.msg,
        status: response.status,
        login: response.data.login,
        
      };
    } else if (
      response.status === 200 &&
      response.data.login === 1 &&
      response.data.admission === false
    ) {
      const oneDay = 24 * 60 * 60 * 1000;
      cookies().set(
        "day_active",
        response.data.day_active,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
      cookies().set(
        "email",
        email,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
      cookies().set(
        "create_at",
        response.data.create_at,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
      cookies().set(
        "admission",
        response.data.admission,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
      cookies().set(
        "uid",
        response.data.reg_uuid,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
      
      return {
        msg: response.data.msg,
        status: response.status,
        login: response.data.login,
        u_id:response.data.u_id,
        Course_title:response.data.title
      };
    } else if (
      response.status === 200 &&
      response.data.login === 1 &&
      response.data.admission === true
    ) {
      const oneDay = 24 * 60 * 60 * 1000;
      cookies().set(
        "uid",
        response.data.reg_uuid,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
      cookies().set(
        "email",
        email,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
      cookies().set(
        "admission",
        response.data.admission,
        { path: "/" },
        { expires: Date.now() - oneDay }
      );
        // For Bkash payment
        // localStorage.setItem("u_id", response.data.u_id);
        // sessionStorage.setItem("u_id", response.data.u_id);
        // localStorage.setItem("Type", 1);
        // localStorage.setItem("Course_title",response.data.title);
        // localStorage.setItem("UserEmail", email);
      return {
        msg: response.data.msg,
        status: response.status,
        login: response.data.login,
      };
    }
  } catch (error) {
    // console.log("An error occurred:", error);
  }
}
