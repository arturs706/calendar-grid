"use client";
import CalendarGrid from "./_components/CalendarGrid";
import TimeGrid from "./_components/TimeGrid";
import { FC } from 'react';


const Calendar: FC = () => {

return (
    <div className="w-full flex justify-center">
        <TimeGrid/>
        <div className="w-2/3 my-3 border border-indigo-500 rounded-sm">
          <CalendarGrid />
        </div>
    </div>
  );

}

export default Calendar;
