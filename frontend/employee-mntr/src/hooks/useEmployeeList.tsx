import { useEffect, useState } from 'react';
import { getEmployees } from '../api';

interface Employee {
    id: string;
    email: string;
  }

const useEmployeeList = (userId: string) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees(userId);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [userId]);

  return { employees, fetchEmployees };
};

export default useEmployeeList;
