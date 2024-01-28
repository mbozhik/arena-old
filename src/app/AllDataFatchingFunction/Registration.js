// Importing ApiUrl module
import axios from "axios";
import ApiUrl from "./ApiUrl";



export default function Registration(data, setOpen, setSuccess,form_id,setPending) {
  try {
    let config = {
      headers: { "content-type": "multipart/form-data" },
    };
    setPending(true)

    axios
      .post(ApiUrl.SendApply, data, config)
      .then((response) => {
        setSuccess(true);
        setOpen(true);
        form_id(response.data[0].form_id);
        setPending(false);
        
        // form_id(response.data.form_id);
      });
  } catch (error) {
    setPending(false)
    console.error("An error occurred:", error.message);
    // Handle errors here
  }
 
}
