  import React, { useState } from 'react';
  import { addEmployee } from '../api';

  interface AddEmployeeFormProps {
    userId: string;
    onEmployeeAdded: () => void;
  }

  const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ userId, onEmployeeAdded}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await addEmployee({ id: Date.now().toString(), user_id: userId, email });
        alert('Employee added successfully');
        setEmail('');      
        onEmployeeAdded();
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Employee email"
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    );
  };

  export default AddEmployeeForm;
