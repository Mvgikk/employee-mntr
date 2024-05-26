import { Request, Response } from 'express';
import { Status } from '../models/Status';

export const getStatuses = async (req: Request, res: Response) => {
  const { date } = req.params;
  try {
    const startDate = new Date(date);
    startDate.setHours(0,0,0,0);
    const endDate = new Date(date);
    endDate.setHours(23,59,59,999);

    
    const statuses = await Status.find({ 
      'report.timestamp': {
      $gte: startDate,
      $lte: endDate,
    },
    });
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addStatus = async (req: Request, res: Response) => {
  const { hired_id, report } = req.body;
  try {
    const newStatus = new Status({ hired_id, report });
    await newStatus.save();
    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
