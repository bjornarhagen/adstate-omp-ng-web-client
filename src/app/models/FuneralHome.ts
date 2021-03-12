import { UUID } from '../types/UUID';

export class FuneralHome {
  id: UUID;
  name: string;
  addressId?: UUID;
  createdAt: Date;
  createdBy: UUID;
  updatedAt?: Date;
  updatedBy?: UUID;
  deletedAt?: Date;
  deletedBy?: UUID;
}
