import axios from 'axios';
import cron from 'node-cron';
import { saveEmployeeStatus } from './apiClient';

const getRandomStatus = (): 'ACTIVE' | 'INACTIVE' => {
  return Math.random() < 0.5 ? 'ACTIVE' : 'INACTIVE';
};

const addHours = (date: Date, hours: number): Date => {
  date.setHours(date.getHours() + hours);
  return date;
};

export const startCronJob = (employeeId: string): void => {
  cron.schedule('* * * * *', async () => {
    const adjustedDate = addHours(new Date(), 2); 
    const timestamp = adjustedDate.toISOString();
    console.log(`[${timestamp}] Checking status for employee ID: ${employeeId}`);

    try {
      await axios.get(process.env.STATUS_URL!);

      const status = getRandomStatus();
      await saveEmployeeStatus(employeeId, status,timestamp);

      console.log(`Employee ID: ${employeeId}, Status: ${status}`);
    } catch (error) {
      console.error('Error performing GET request:', error);
    }
  });

  console.log(`Cron job started for employee ID: ${employeeId}`);
};
