// Importing ApiUrl module
import axios from "axios";
import ApiUrl from "./ApiUrl";

export default function ShortRegistration(
  data,
  setOpen,
  setSuccess,
  form_id,
  setPending
) {
  try {
    let config = {
      headers: { "content-type": "multipart/form-data" },
    };
    setPending(true);

    axios.post(ApiUrl.BaseUrl+'api/simple-form/', data).then((response) => {
      setSuccess(true);
      setOpen(true);
      form_id(response.data.id);
      setPending(false);

//  console.log(response);
    });
  } catch (error) {
    setPending(false);
  }
}
