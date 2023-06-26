import React from "react"

const MonthNames = () => {
  const data = ['January','February','March','April','May',
  'June','July','August','September','October','November','December']

  return (
    <div className="flex flex-col items-center gap-4 py-4 w-80 m-auto">
      Month Names
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

export default MonthNames
