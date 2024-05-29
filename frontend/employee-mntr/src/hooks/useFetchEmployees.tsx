import { useEffect, useState, useCallback } from 'react';
import { getEmployees } from '../api';

export interface Employee {
  id: string;
  email: string;
}

const useFetchEmployees = (userId: string) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = useCallback(async () => {
    try {
      const response = await getEmployees(userId);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }, [userId]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return { employees, fetchEmployees };
};

export default useFetchEmployees;
