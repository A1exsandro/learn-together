import React from "react"

const WeekDays = () => {
  const data = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
  'Thursday', 'Friday', 'Saturday']

  return (
    <div className="flex flex-col items-center gap-4 mt-4 w-80 m-auto">
      Day of the week
      {
        data.map((day,i) => (
          <div 
            className="bg-white w-full rounded-full text-center py-4"
            key={i}
          >
            {day}
          </div>
        ))
      }
    </div>
  )
}

export default WeekDays
