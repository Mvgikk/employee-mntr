import React from 'react';
import EmployeeRow from './EmployeeRow';
import { Employee } from '../hooks/useFetchEmployees';
import { Status } from '../hooks/useFetchStatuses';

interface EmployeeListProps {
  employees: Employee[];
  onEmployeeRemoved: () => void;
  selectedDate: Date;
  statuses: Status[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onEmployeeRemoved, selectedDate, statuses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Email</th>
          <th>Timeline</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <EmployeeRow
            key={employee.id}
            employee={employee}
            selectedDate={selectedDate}
            statuses={statuses}
            onEmployeeRemoved={onEmployeeRemoved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
