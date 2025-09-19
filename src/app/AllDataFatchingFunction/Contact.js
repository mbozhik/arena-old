import axios from 'axios'
import ApiUrl from './ApiUrl'
export default function Contact(newFormData) {
  // console.log(newFormData);
  // let config = {
  //   headers: { "content-type": "multipart/form-data" },
  // };
  axios
    .post(ApiUrl.Contact, newFormData)
    .then((res) => {})
    .catch((err) => {
      console.log(err)
    })
}
