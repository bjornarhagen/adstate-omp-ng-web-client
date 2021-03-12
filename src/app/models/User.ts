import { UUID } from '../types/UUID';

export class User {
  id: UUID;
  name: string;
  email: string;
  phone?: string;
  createdAt: Date;
  updatedAt?: Date;
}
