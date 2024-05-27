import React from 'react';
import useEmployeeList from '../hooks/useEmployeeList';
import EmployeeRow from './EmployeeRow';

interface EmployeeListProps {
  userId: string;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ userId }) => {
  const { employees, fetchEmployees } = useEmployeeList(userId);

  return (
    <table>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <EmployeeRow key={employee.id} employee={employee} onEmployeeRemoved={fetchEmployees} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
