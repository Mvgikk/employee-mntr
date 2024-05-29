import React from 'react';
import EmployeeRow from './EmployeeRow';
import { Employee } from '../hooks/useFetchEmployees';

interface EmployeeListProps {
  employees: Employee[];
  onEmployeeRemoved: () => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onEmployeeRemoved }) => {
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
          <EmployeeRow key={employee.id} employee={employee} onEmployeeRemoved={onEmployeeRemoved} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
