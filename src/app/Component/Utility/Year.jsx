'use client';
import { useEffect, useRef, useState } from 'react';

export const CustomYearSelect = ({ month, day, setYear, setBirth_date }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectYear, setSelectYear] = useState('Year');
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleSelect = (year) => {
    setSelectYear(year);
    setYear(year);
    setBirth_date(`${year}-${month}-${day}`);
    setDropdownOpen(false);
  };

  // Calculate position
  useEffect(() => {
    if (dropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 4, left: rect.left, width: rect.width });
    }
  }, [dropdownOpen]);

  // Outside click detection
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

  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          setDropdownOpen((prev) => !prev);
        }}
        className="w-full border border-[#B0BEC5] rounded-md py-1 text-center relative z-10 bg-white"
      >
        {selectYear}
      </button>

      {dropdownOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            width: position.width,
            zIndex: 9999,
          }}
          className="max-h-72 overflow-y-auto bg-white border border-[#B0BEC5] rounded-md shadow-lg"
        >
          {yearsArray.map((year) => (
            <div
              key={year}
              onClick={() => handleSelect(year)}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-center"
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
