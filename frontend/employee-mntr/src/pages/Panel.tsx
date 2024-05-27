import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';
import Timeline from '../components/Timeline';
import useEmployeeList from '../hooks/useEmployeeList';

const Panel: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('user_id') || '';

  const { fetchEmployees } = useEmployeeList(userId);

  const handleEmployeeAdded = () => {
    fetchEmployees();
  };


  if (!userId) {
    return <div>Please provide a user ID in the URL.</div>;
  }


  return (
    <div>
      <h1>Employee Work Monitoring</h1>
      <AddEmployeeForm userId={userId} onEmployeeAdded={handleEmployeeAdded} />
      <EmployeeList userId={userId} />
      <Timeline date={new Date().toString()} />
    </div>
  );
};

export default Panel;
