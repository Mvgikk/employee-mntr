import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface Report {
  id: string;
  value: 'ACTIVE' | 'INACTIVE';
  timestamp: string;
}

interface Status {
  hired_id: string;
  report: Report[];
}

export const saveEmployeeStatus = async (employeeId: string, value: 'ACTIVE' | 'INACTIVE', timestamp: string): Promise<void> => {
  try {
    const report: Report = {
      id: uuidv4(),
      value,
      timestamp: timestamp
    };

    const status: Status = {
      hired_id: employeeId,
      report: [report]
    };

    await axios.post(process.env.API_URL!, status);
  } catch (error) {
    console.error('Error saving employee status:', error);
  }
};
