import React from 'react';
import MyMonthlyCalendar from './components/MyMonthlyCalendar';
import DailyReminders from './components/DailyReminders';
import WeeklyReminders from './components/WeeklyReminders';


const App = () => {
  
  return (
    <div className="ui segment">
      <div className="ui two column very relaxed grid">

        <div className="ten wide column">
          <MyMonthlyCalendar />
        </div>

        <div className="six wide column">

          <div>
            <DailyReminders />
          </div>

          <div className="ui horizontal divider"></div>

          <div>
            <WeeklyReminders />
          </div>

        </div>
      </div>
    </div>
  )
  
};

export default App;