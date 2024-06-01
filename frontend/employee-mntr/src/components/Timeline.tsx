import React from 'react';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';
import { Report, Status } from '../hooks/useFetchStatuses';
import '../App.css';

interface TimelineProps {
  date: string;
  employeeId: string;
  statuses: Status[];
}

const Timeline: React.FC<TimelineProps> = ({ date, employeeId, statuses }) => {
  const selectedDate = new Date(date);
  const employeeStatuses = statuses.find(status => status.hired_id === employeeId);

  const generateItems = (reports: Report[]) => {
    const items: JSX.Element[] = [];
    
    items.push(
      <ItemDirective
        key="start"
        content="0:00"
        oppositeContent=""
      />
    );

    reports.forEach((report) => {
      const reportDate = new Date(report.timestamp);
      if (
        reportDate.getFullYear() === selectedDate.getFullYear() &&
        reportDate.getMonth() === selectedDate.getMonth() &&
        reportDate.getDate() === selectedDate.getDate()
      ) {
        const isActive = report.value === 'ACTIVE';
        const cssClass = isActive ? 'state-completed' : '';
        const formattedTime = reportDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

        items.push(
          <ItemDirective
            key={report.id}
            cssClass={cssClass}
            content={formattedTime}
            oppositeContent={report.value}
          />
        );
      }
    });
  
    items.push(
      <ItemDirective  
        key="end"
        content="24:00"
        oppositeContent=""
      />
    );
  
    return items;
  };

  return (
    <div>
      <div>
        {!employeeStatuses && <div>No statuses available for the selected date.</div>}
        {employeeStatuses && (
          <div>
            <TimelineComponent orientation='Horizontal' cssClass='dot-color'>
              <ItemsDirective>
                {generateItems(employeeStatuses.report)}
              </ItemsDirective>
            </TimelineComponent>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
