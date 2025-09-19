// // Importing ApiUrl module
// import axios from "axios";
// import ApiUrl from "./ApiUrl";

// export default function Registration(
//   data,
//   setOpen,
//   setSuccess,
//   form_id,
//   setPending
// ) {
//   try {
//     let config = {
//       headers: { "content-type": "multipart/form-data" },
//     };
//     setPending(true);
//     axios.post(ApiUrl.SendApply, data, config).then((response) => {
//       console.log('success');
//       setSuccess(true);
//       setOpen(true);
//       form_id(response.data[0].form_id);
//       setPending(false);

//       // form_id(response.data.form_id);
//     });
//   } catch (error) {
//     console.log('fuck code ')
//     Swal.fire({
//       position: "top-center",
//       icon: "error",
//       title:
//         "Server-side developer is currently working. Please try again later if you encounter an error",
//       showConfirmButton: false,
//       showDenyButton: true,
//       denyButtonText: `ok`,
//       timer: 2000,
//     });
//     setPending(false);
//   }
// }
// Importing ApiUrl module
import axios from 'axios'
import ApiUrl from './ApiUrl'

export default function Registration(data, setOpen, setSuccess, form_id, setPending) {
  setPending(true)
  let config = {
    headers: {'content-type': 'multipart/form-data'},
  }

  axios
    .post(ApiUrl.SendApply, data, config)
    .then((response) => {
      console.log(response.data[0].code)
      if (response.data[0].code == 200) {
        console.log(response)
        setSuccess(true)
        setOpen(true)
        form_id(response.data[0].form_id)
        setPending(false)
      } else if (response.data[0].code == 202) {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: response.data[0].msg,
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: `OK`,
          timer: 3000,
        })
      }
    })
    .catch((error) => {
      console.error('Error:', error)
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Server Under maintanece !!!! \n try again later.',
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `OK`,
        timer: 3000,
      })
      setPending(false)
    })
}
