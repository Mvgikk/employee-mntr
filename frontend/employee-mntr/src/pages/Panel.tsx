import React from 'react';
import { useLocation } from 'react-router-dom';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';
import Timeline from '../components/Timeline';
import useFetchEmployees from '../hooks/useFetchEmployees';

const Panel: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('user_id') || '';

  const { employees, fetchEmployees } = useFetchEmployees(userId);

  if (!userId) {
    return <div>Please provide a user ID in the URL.</div>;
  }

  return (
    <div>
      <h1>Employee Work Monitoring</h1>
      <AddEmployeeForm userId={userId} onEmployeeAdded={fetchEmployees} />
      <EmployeeList employees={employees} onEmployeeRemoved={fetchEmployees} />
      <Timeline date={new Date().toString()} />
    </div>
  );
};

export default Panel;
