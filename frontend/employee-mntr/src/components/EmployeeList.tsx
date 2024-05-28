import React, { useEffect, useState } from 'react';
import { getEmployees } from '../api';
import EmployeeRow from './EmployeeRow';

interface Employee {
  id: string;
  email: string;
}

interface EmployeeListProps {
  userId: string;
  fetchEmployees: () => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ userId, fetchEmployees }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);


  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const response = await getEmployees(userId);
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    loadEmployees();
  }, [userId, fetchEmployees]);

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
          <EmployeeRow key={employee.id} employee={employee} onEmployeeRemoved={fetchEmployees} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
