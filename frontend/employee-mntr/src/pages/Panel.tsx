import React from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';
import useFetchEmployees from '../hooks/useFetchEmployees';
import useFetchStatuses from '../hooks/useFetchStatuses';

const Panel: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('user_id') || '';

  const { employees, fetchEmployees } = useFetchEmployees(userId);
  const { statuses, selectedDate, setSelectedDate } = useFetchStatuses(new Date());

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  if (!userId) {
    return <div>Please provide a user ID in the URL.</div>;
  }

  return (
    <div>
      <h1>Employee Work Monitoring</h1>
      <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="yyyy-MM-dd" />
      <AddEmployeeForm userId={userId} onEmployeeAdded={fetchEmployees} />
      <EmployeeList employees={employees} onEmployeeRemoved={fetchEmployees} selectedDate={selectedDate} statuses={statuses} />
    </div>
  );
};

export default Panel;
