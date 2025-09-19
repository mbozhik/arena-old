import {cookies} from 'next/headers'
import Time from './Time'

const ProfileTime = async () => {
  const cookieStore = cookies()
  const cookieValue = cookieStore.get('day_active')
  const regTime = cookieStore.get('create_at')
  const admission = cookieStore.get('admission')
  const admissionvalue = admission?.value
  const activeday = cookieValue?.value
  const newCreateDates = regTime?.value
  const CreateDates = new Date(newCreateDates).getTime()
  if (admissionvalue == 'true') {
    return (
      <div className="absolute transform -translate-x-1/2  left-1/2 top-40">
        <h1 className="font-bold text-white lg:text-3xl">Arena Web Security</h1>
        <p className="lg:w-full bg-[#ffd321] h-1 mt-1 mx-auto "></p>
      </div>
    )
  } else {
    return <Time CreateDates={CreateDates} activeday={activeday}></Time>
  }
}

export default ProfileTime
