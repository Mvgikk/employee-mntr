import React from 'react';
import RemoveEmployeeButton from './RemoveEmployeeButton';
import { Employee } from '../hooks/useFetchEmployees';


interface EmployeeRowProps {
  employee: Employee;
  onEmployeeRemoved: () => void;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee, onEmployeeRemoved }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.email}</td>
      <td>######TIMELINE######</td>
      <td>
        <RemoveEmployeeButton employeeId={employee.id} onEmployeeRemoved={onEmployeeRemoved} />
      </td>
    </tr>
  );
};

export default EmployeeRow;
