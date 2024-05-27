import React from 'react';
import RemoveEmployeeButton from './RemoveEmployeeButton';

interface Employee {
  id: string;
  email: string;
}

interface EmployeeRowProps {
  employee: Employee;
  onEmployeeRemoved: () => void;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee, onEmployeeRemoved }) => {
  return (
    <tr>
      <td>{employee.email}</td>
      <td>
        <RemoveEmployeeButton employeeId={employee.id} onEmployeeRemoved={onEmployeeRemoved} />
      </td>
    </tr>
  );
};

export default EmployeeRow;
