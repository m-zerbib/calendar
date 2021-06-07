import React from 'react';
import MyMonthlyCalendar from './components/MyMonthlyCalendar';
import RemindersCell from './components/RemindersCell';
import OtherReminders from './components/OtherReminders';
import Reminders from './components/Reminders';


const App = () => {
  
  return (
    <div className="ui segment">
      <div className="ui two column very relaxed grid">

        <div className="ten wide column">
          <MyMonthlyCalendar />
        </div>

        <div className="six wide column">
          <div>
            <Reminders />
          </div>
          <div className="ui horizontal divider"></div>
          <div>
            <RemindersCell header="Due Today:"/>
          </div>

          <div className="ui horizontal divider"></div>

          <div>
            <RemindersCell header="Future Reminders:" />
          </div>

        </div>
      </div>
    </div>
  )
  
};

export default App;