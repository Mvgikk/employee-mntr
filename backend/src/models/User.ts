import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  id: string;
}

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true }
});

export const User = model<IUser>('User', userSchema);
