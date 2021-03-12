import { UUID } from '../types/UUID';

export class DeceasedPerson {
  id: UUID;
  firstname: string;
  lastname?: string;
  dateOfBirth?: Date;
  dateOfDeath?: Date;
  birthAddressId?: UUID;
  residencyAddressId?: UUID;
  createdAt: Date;
  createdBy: UUID;
  updatedAt?: Date;
  updatedBy?: UUID;
  deletedAt?: Date;
  deletedBy?: UUID;
}
