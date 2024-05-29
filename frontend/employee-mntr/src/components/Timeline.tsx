import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimelineChart from './TimelineChart';
import useFetchStatuses from '../hooks/useFetchStatuses';

interface TimelineProps {
  date: string;
}

const Timeline: React.FC<TimelineProps> = ({ date }) => {
  const { statuses, selectedDate, setSelectedDate } = useFetchStatuses(new Date(date));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="yyyy-MM-dd" />
      <div>
        {statuses.length === 0 && <div>No statuses available for the selected date.</div>}
        {statuses.map(status => (
          <div key={status.hired_id}>
            <h3>Employee ID: {status.hired_id}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
