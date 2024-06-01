import { useState, useEffect, useCallback } from 'react';
import { getStatuses } from '../api';

export interface Report {
  id: string;
  value: 'ACTIVE' | 'INACTIVE';
  timestamp: string;
}

export interface Status {
  hired_id: string;
  report: Report[];
}

const useFetchStatuses = (initialDate: Date) => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  const fetchStatuses = useCallback(async () => {
    if (selectedDate) {
      try {
        const response = await getStatuses(selectedDate.toISOString());
        if (response.data) {
          setStatuses(response.data);
        } else {
          console.error('No data received from API');
        }
      } catch (error) {
        console.error('Error fetching statuses:', error);
      }
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchStatuses();
  }, [fetchStatuses]);

  return { statuses, selectedDate, setSelectedDate };
};

export default useFetchStatuses;
