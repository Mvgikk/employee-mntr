import { Request, Response } from 'express';
import { Hired } from '../models/Hired';

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
    await Hired.findByIdAndDelete(id);
    res.status(200).json({ message: 'Hired deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getEmployeesByUserId = async (req: Request, res: Response) => {
    const { user_id } = req.params;
    try {
      const employees = await Hired.find({ user_id });
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
