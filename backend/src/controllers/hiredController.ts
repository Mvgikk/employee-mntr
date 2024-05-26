import { Request, Response } from 'express';
import { Hired } from '../models/Hired';
import { Status } from '../models/Status'

export const getHired = async (req: Request, res: Response) => {
  try {
    const hired = await Hired.find();
    res.status(200).json(hired);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addHired = async (req: Request, res: Response) => {
  const { id, user_id, email } = req.body;
  try {
    const newHired = new Hired({ id, user_id, email });
    await newHired.save();
    res.status(201).json(newHired);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteHired = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const hired = await Hired.findOneAndDelete({ id });

    if (!hired) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    await Status.deleteMany({ hired_id: id });

    res.status(200).json({ message: 'Employee and related statuses deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getEmployeesByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
      const employees = await Hired.find({ user_id: userId });
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
