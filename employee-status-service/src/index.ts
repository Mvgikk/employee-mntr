import { startCronJob } from './cronJob';
import dotenv from 'dotenv';

dotenv.config();


const employeeId = process.env.EMPLOYEE_ID;
if (!employeeId) {
  console.error('EMPLOYEE_ID environment variable is required.');
  process.exit(1);
}

startCronJob(employeeId);
