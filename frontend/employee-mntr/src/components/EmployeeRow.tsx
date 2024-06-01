import React from 'react';
import RemoveEmployeeButton from './RemoveEmployeeButton';
import { Employee } from '../hooks/useFetchEmployees';
import Timeline from './Timeline';
import { Status } from '../hooks/useFetchStatuses';

interface EmployeeRowProps {
  employee: Employee;
  selectedDate: Date;
  statuses: Status[];
  onEmployeeRemoved: () => void;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee, selectedDate, statuses, onEmployeeRemoved }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.email}</td>
      <td className="timeline">
        <Timeline date={selectedDate.toISOString()} employeeId={employee.id} statuses={statuses} />
      </td>
      <td>
        <RemoveEmployeeButton employeeId={employee.id} onEmployeeRemoved={onEmployeeRemoved} />
      </td>
    </tr>
  );
};

export default EmployeeRow;
