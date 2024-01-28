// Importing ApiUrl module
import axios from "axios";
import ApiUrl from "./ApiUrl";

export default function StudentLogin(data) {
  try {
    axios.post(ApiUrl.SendLogin, data).then((response) => {
      console.log(response)
      if(response.status===200 && response.data.login===0){
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: response.data.msg,
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: `ok`,
          timer:2000
      });
      }

      // form_id(response.data.form_id);
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
    // Handle errors here
  }
}
