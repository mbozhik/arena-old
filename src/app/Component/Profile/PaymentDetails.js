import PaymentHistory from "@/app/AllDataFatchingFunction/PaymentHistory";
import React from "react";

const PaymentDetails = async ({ paymetdata, courseFee }) => {
  const data = paymetdata;

  return (
    <div className="  " id="paymentId">
      <h4 className=" py-3 text-black mt-4   md:text-3xl text-2xl font-semibold">
        Payment Summary
      </h4>
      {/* <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date of Payment
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Type
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Number/Account Number
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.data.length === 0 ? (
              <tr className="text-center">
                <td className="text-1xl mt-2 py-5 text-center " colSpan={4}>
                  No Payment Details Available
                </td>
              </tr>
            ) : (
              data?.data?.datadata?.data?.data.map((payment, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {new Date(payment.time).getDate() +
                      "-" +
                      parseInt(new Date(payment.time).getMonth() + 1) +
                      "-" +
                      new Date(payment.time).getFullYear()}
                  </th>
                  <td className="px-6 py-4">{payment.payment_type}</td>
                  <td className="px-6 py-4">{payment.pay_number}</td>
                  <td className="px-6 py-4">{payment.amount}</td>
                </tr>
              ))
            )}

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 font-semibold text-black text-right">
                Total Paid
              </td>
              <td className="px-6 py-4 font-semibold text-green-500">
                {data?.data?.total.total_amount > 0
                  ? data?.data?.total.total_amount
                  : "0.00"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 font-semibold text-black text-right">
                Due
              </td>
              <td className="px-6 py-4 font-semibold text-yellow-800">
                {data?.data?.total.total_amount > 0
                  ? courseFee - data?.data?.total.total_amount
                  : courseFee}
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className="relative overflow-x-auto rounded-md border border-gray-200 mt-4">
  <table className="w-full text-sm text-left text-gray-700">
    <thead className="text-sm font-bold text-black bg-gray-100">
      <tr>
        <th className="px-4 py-3 border border-gray-200">#</th>
        <th className="px-4 py-3 border border-gray-200">Date of Payment</th>
        <th className="px-4 py-3 border border-gray-200">Payment Type</th>
        <th className="px-4 py-3 border border-gray-200">Payment Number/Account Number</th>
        <th className="px-4 py-3 border border-gray-200">Amount</th>
      </tr>
    </thead>
    <tbody className="text-[15px] text-black">
      {data?.data?.data.length === 0 ? (
        <tr>
          <td colSpan={5} className="text-center py-6 font-medium ">
            No Payment Details Available
          </td>
        </tr>
      ) : (
        data?.data?.data.map((payment, index) => (
          <tr className="bg-white border border-gray-200" key={index}>
            <td className="px-4 py-3 border border-gray-200 text-center">{index + 1}</td>
            <td className="px-4 py-3 border border-gray-200">
              {new Date(payment.time).toLocaleDateString("en-GB")}
            </td>
            <td className="px-4 py-3 border border-gray-200">{payment.payment_type}</td>
            <td className="px-4 py-3 border border-gray-200">{payment.pay_number}</td>
            <td className="px-4 py-3 border border-gray-200">{payment.amount}</td>
          </tr>
        ))
      )}

      {/* Total Paid Row */}
      <tr className="bg-white border border-gray-200 font-medium">
        <td colSpan={3}></td>
        <td className="px-4 py-3 text-right border border-gray-200">Total Paid:</td>
        <td className="px-4 py-3 border border-gray-200 ">
          {data?.data?.total.total_amount > 0
            ? data?.data?.total.total_amount
            : "0.00"} ৳
        </td>
      </tr>

      {/* Due Row */}
      <tr className="bg-white border border-gray-200 font-medium">
        <td colSpan={3}></td>
        <td className="px-4 py-3 text-right border border-gray-200">Due:</td>
        <td className="px-4 py-3 border border-gray-200 ">
          {data?.data?.total.total_amount > 0
            ? courseFee - data?.data?.total.total_amount
            : courseFee} ৳
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default PaymentDetails;
