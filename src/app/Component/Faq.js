'use client'
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What is Your Payment Process?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        You can pay via online and offline both. Online process via # Bkash # Western Union.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         What document do i need for admission?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        1 copy passport size picture, National Identity Card or Birth Cirtificate or Verified Educational Id you have to submit for taking admission.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
       What is the last time of application?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Our seats are limited.So you have to take admission before the seats will fill.
        </AccordionBody>
      </Accordion>
    </>
  );
}