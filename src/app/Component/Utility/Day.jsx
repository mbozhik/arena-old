'use client'
import {useEffect, useRef, useState} from 'react'

export const CustomDaySelect = ({year, month, setBirth_date, setDay}) => {
  const [showAllDays, setShowAllDays] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [position, setPosition] = useState({top: 0, left: 0, width: 0})
  const [selectday, setSelectDay] = useState('Day')

  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)

  const allDays = Array.from({length: 31}, (_, i) => i + 1)
  const visibleDays = showAllDays ? allDays : allDays.slice(0, 12)

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 5
    if (bottom && !showAllDays) {
      setShowAllDays(true)
    }
  }

  const handleSelect = (day) => {
    setSelectDay(day)
    setDay(day)
    setBirth_date(`${year}-${month}-${day}`)
    setDropdownOpen(false)
  }

  // Calculate position on open
  useEffect(() => {
    if (dropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setPosition({top: rect.bottom + 4, left: rect.left, width: rect.width})
    }
  }, [dropdownOpen])

  // Outside click detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])
  useEffect(() => {
    if (dropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const dropdownHeight = 288 // max-h-72 = 18rem = 288px
      const windowHeight = window.innerHeight

      const fitsBelow = rect.bottom + dropdownHeight < windowHeight
      const top = fitsBelow ? rect.bottom + 4 : rect.top - dropdownHeight - 4

      setPosition({
        top,
        left: rect.left,
        width: rect.width,
      })
    }
  }, [dropdownOpen])
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    const handleWindowScroll = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      window.addEventListener('scroll', handleWindowScroll, true)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleWindowScroll, true)
    }
  }, [dropdownOpen])

  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault()
          setDropdownOpen((prev) => !prev)
          setShowAllDays(false)
        }}
        className="w-full border border-[#B0BEC5] rounded-md py-1  text-center relative z-10 bg-white"
      >
        {selectday}
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
          className="max-h-72 ml-2 overflow-y-auto bg-white border border-[#B0BEC5] rounded-md shadow-lg"
          onScroll={handleScroll}
        >
          {visibleDays.map((day) => (
            <div key={day} onClick={() => handleSelect(day)} className="px-2 text-center cursor-pointer hover:bg-gray-100">
              {day}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
