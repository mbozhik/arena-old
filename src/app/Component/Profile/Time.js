'use client'
import {useState} from 'react'
import Delete from './Cookies'
import ClearSession from './ClearStirage'
const Time = ({CreateDates, activeday}) => {
  const [duration, setDuration] = useState(false)
  if (duration) {
    Swal.fire({
      title: 'Session Expire ! Please Call The Help Number +88 01324176407',
      timer: 1000,
      button: false,
      timerProgressBar: true,
      customClass: 'swal-Title',
    }).then((result) => {
      ClearSession()
      Delete()
    })
  }
  const [day, setDay] = useState(0)
  const [houre, setHoure] = useState(0)
  const [munites, setMunites] = useState(0)
  const [seconds, setSeconds] = useState(0)
  let myInterval = setInterval(() => {
    let active = Number(activeday)
    var CreateDate = CreateDates + 86400000 * active
    var today = new Date().getTime()
    var distance = CreateDate - today
    let timeDiff = distance
    let newseconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
    let newminutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    let newhours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    if (timeDiff > 0) {
      setDay(days)
      setHoure(newhours)
      setMunites(newminutes)
      setSeconds(newseconds)
    } else {
      clearInterval(myInterval)
      setDuration(!duration)
    }
  }, 1000)
  return (
    <div>
      <div className="absolute transform -translate-x-1/2 left-1/2 top-40 ">
        <div className="flex items-center justify-between mt-10  md:gap-x-20 gap-x-6">
          <div className="text-center ">
            <h3 className="text-3xl font-bold text-white">{day}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Day</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">{houre}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Hours</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">{munites}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Minutes</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">{seconds}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Time
