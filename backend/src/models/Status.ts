import { Schema, model, Document } from 'mongoose';

interface IReport {
  id: string;
  value: 'ACTIVE' | 'INACTIVE';
  timestamp: Date;
}

interface IStatus extends Document {
  hired_id: string;
  report: IReport[];
}

const reportSchema = new Schema<IReport>({
  id: { type: String, required: true, unique: true },
  value: { type: String, enum: ['ACTIVE', 'INACTIVE'], required: true },
  timestamp: { type: Date, required: true }
});

const statusSchema = new Schema<IStatus>({
  hired_id: { type: String, required: true},
  report: { type: [reportSchema], required: true }
});

export const Status = model<IStatus>('Status', statusSchema);
