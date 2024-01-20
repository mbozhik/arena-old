// "use client";
// import React, { useEffect, useRef } from "react";
// import p from "@/app/Images/About/AboutPagePdf/AWTBrochure.pdf"

const iframeStyle = {
  width: "100%",
  height: "1000px",
  backgroundColor: "white", // Set your desired background color
  border: "0",
};
// const iframe = document.getElementById("Ifrem");
const Pdf = () => {
  return (
    <div>
      <iframe
        id="Ifrem"
        style={iframeStyle}
        sizes="100vw"
        src={`/AWTBrochure.pdf`}
        frameBorder="0"
        height="1000px"
        width="80%"
        // themeColor="red"
      />
    </div>
  );
};

export default Pdf;
