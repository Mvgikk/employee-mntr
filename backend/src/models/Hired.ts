import { Schema, model, Document } from 'mongoose';

interface IHired extends Document {
  id: string;
  user_id: string;
  email: string;
}

const hiredSchema = new Schema<IHired>({
  id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  email: { type: String, required: true }
});

export const Hired = model<IHired>('Hired', hiredSchema);
