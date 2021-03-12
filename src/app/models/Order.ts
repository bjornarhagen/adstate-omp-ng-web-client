import { UUID } from '../types/UUID';

export class Order {
  id: UUID;
  deceasedPersonId: UUID;
  funeralHomeId: UUID;
  CeremonyDatetime?: Date;
  CeremonyAddressId?: UUID;
  MemorialDatetime?: Date;
  MemorialAddressId?: UUID;
  createdAt: Date;
  createdBy: UUID;
  updatedAt?: Date;
  updatedBy?: UUID;
  deletedAt?: Date;
  deletedBy?: UUID;
}
