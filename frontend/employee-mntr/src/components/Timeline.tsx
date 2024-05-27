import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getStatuses } from '../api';

interface Report {
  id: string;
  value: 'ACTIVE' | 'INACTIVE';
  timestamp: Date;
}

interface Status {
  hired_id: string;
  report: Report[];
}

interface TimelineProps {
  date: string;
}

const Timeline: React.FC<TimelineProps> = ({ date }) => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(date));

  const fetchStatuses = async () => {
    if (selectedDate) {
      try {
        const response = await getStatuses(selectedDate.toString());
        if (response.data) {
          setStatuses(response.data);
        } else {
          console.error('No data received from API');
        }
      } catch (error) {
        console.error('Error fetching statuses:', error);
      }
    }
  };

  useEffect(() => {
    fetchStatuses();
  }, [selectedDate]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker 
        selected={selectedDate} 
        onChange={handleDateChange} 
        dateFormat="yyyy-MM-dd"
      />
      <div>
        {statuses.length === 0 && <div>No statuses available for the selected date.</div>}
        {statuses.map(status => (
          <div key={status.hired_id}>
            <h3>Employee ID: {status.hired_id}</h3>
            {status.report.length === 0 && <div>No reports available.</div>}
            {status.report.map(report => (
              <div key={report.id}>
                {report.value} - {new Date(report.timestamp).toLocaleTimeString()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
