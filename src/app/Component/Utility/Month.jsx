'use client';
import { useEffect, useRef, useState } from 'react';

const MonthsArray = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const CustomMonthSelect = ({ year, day, setBirth_date, setMonth }) => {
  const [showAllMonths, setShowAllMonths] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const [selectedMonth, setSelectedMonth] = useState('Month');

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const visibleMonths = showAllMonths ? MonthsArray : MonthsArray.slice(0, 12);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 5;
    if (bottom && !showAllMonths) {
      setShowAllMonths(true);
    }
  };

  const handleSelect = (month, index) => {
    setSelectedMonth(month);
    const monthNum = index + 1;
    setMonth(monthNum);
    setBirth_date(`${year}-${monthNum}-${day}`);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (dropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 4, left: rect.left, width: rect.width });
    }
  }, [dropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);
  useEffect(() => {
    if (dropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = 288; // max-h-72 = 18rem = 288px
      const windowHeight = window.innerHeight;
  
      const fitsBelow = rect.bottom + dropdownHeight < windowHeight;
      const top = fitsBelow ? rect.bottom + 4 : rect.top - dropdownHeight - 4;
  
      setPosition({
        top,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [dropdownOpen]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
  
    const handleWindowScroll = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
  
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleWindowScroll, true);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleWindowScroll, true);
    };
  }, [dropdownOpen]);
  
  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          setDropdownOpen((prev) => !prev);
          setShowAllMonths(false);
        }}
        className="w-full border border-[#B0BEC5] rounded-md py-1 text-center relative z-10 bg-white"
      >
        {selectedMonth}
      </button>

      {dropdownOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            width: position.width +40,
            zIndex: 9999,
          }}
          className="max-h-80 ml-2 overflow-y-auto overflow-x-hidden bg-white border border-[#B0BEC5] rounded-md shadow-lg "
          onScroll={handleScroll}
        >
          {visibleMonths.map((month, index) => (
            <div
              key={index}
              onClick={() => handleSelect(month, index)}
              className="px-2  hover:bg-gray-100 cursor-pointer text-center"
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
