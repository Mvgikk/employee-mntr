import React from 'react';
import { deleteEmployee } from '../api';

interface RemoveEmployeeButtonProps {
  employeeId: string;
  onEmployeeRemoved: () => void;
}

const RemoveEmployeeButton: React.FC<RemoveEmployeeButtonProps> = ({ employeeId,onEmployeeRemoved }) => {
  const handleRemove = async () => {
    try {
      await deleteEmployee(employeeId);
      alert('Employee removed successfully');
      onEmployeeRemoved();
    } catch (error) {
      console.error('Error removing employee:', error);
    }
  };

  return (
    <button onClick={handleRemove}>Remove</button>
  );
};

export default RemoveEmployeeButton;
