const { default: ApiUrl } = require("./ApiUrl");
import { cookies } from "next/headers";
 export default async function PaymentHistory() {
    const cookieStore = cookies();
    const cookieValue = cookieStore.get("uid");
    const emailValue = cookieStore.get("email");
    const email = emailValue?.value;
    const uid = cookieValue?.value;
    try {
      const res = await fetch(ApiUrl.BaseUrl + "api/t-list/?reg_uuid="+uid);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
     const result= await res.json()
      return {data:result, uid:uid,email:email};
    } catch (error) {
      console.log('An error occurred:', error.message);
    }
  }
