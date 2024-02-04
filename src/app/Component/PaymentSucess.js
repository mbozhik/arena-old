// 'use client'
// import React from 'react';
// import { Col, Container, Row } from "react-bootstrap";
// import { withRouter } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// class PaymentSuccess extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       trxID: '',
//       amount: '',
//       emailID: '',
//     };
//   }

//   componentDidMount() {
//     const { location } = this.props;

//     if (location && location.search) {
//       const searchParams = new URLSearchParams(location.search);

//       const trxID = searchParams.get('trxID');
//       const amount = searchParams.get('amount');
//       const emailID = localStorage.getItem('UserEmail');

//       this.setState({ trxID, amount, emailID });
//       // console.log(trxID, amount, emailID);
//       window.history.replaceState({}, '', '/paymentSuccess');
//     } else {
//       console.error('Location or search params not available.');
//     }
//   }

//   handleCopyClick = () => {
//     const { trxID, amount, emailID } = this.state;
//     const textToCopy = `Transaction ID: ${trxID}\nAmount: ${amount}\nEmail: ${emailID}`;

//     // Create a textarea element, set its value, and copy the value to the clipboard
//     const textarea = document.createElement('textarea');
//     textarea.value = textToCopy;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textarea);

//     // alert('Copied to clipboard!');
//     toast('Copied to clipboard!')
//   };

//   render() {
//     const ContentTop = {
//       marginTop: "50px"
//     };

//     const { trxID, amount } = this.state;

//     return (
//       <React.Fragment>
//         <Container className="p-2" style={ContentTop}>
//           <Row className="align-content-center justify-content-center">
//             <Col xl={6} lg={6} sm={12} md={12}
//               className="p-5 card SuccessCard shadow-sm border-0 justify-content-center align-content-center">
//               <h6 className="CongratulationText text-center mb-3">Congratulations!</h6>
//               <div className="SmsBox">
//                 <h6 className="SuccessMsgText">Your Payment has been completed successfully.</h6>
//               </div>
//               <div className='border-left border-bottom border-right pl-5 pt-4 pb-1 pr-5'>
//                 <p className='text-center'>Transaction ID: <span className="text-success"> {trxID}</span> </p>
//                 <p className='text-center'>Amount:  <span className="text-success">{amount}</span></p>
//                 <p className='text-center'>Email:  <span className="text-success">{this.state.emailID}</span></p>
//                 <p className='text-center text-success pt-2'>(Copy Your Transaction Id,Amount & Email for Future Reference)</p>
//                  <div className='d-flex justify-content-center align-items-center'>
//                    <button className='btn btn-dark' onClick={this.handleCopyClick}>Copy</button>
//                  </div>
//               </div>
//               <ToastContainer></ToastContainer>
//             </Col>
//           </Row>
//         </Container>
//       </React.Fragment>
//     );
//   }
// }

// export default withRouter(PaymentSuccess);
