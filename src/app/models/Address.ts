import { UUID } from '../types/UUID';

export class Address {
  id: UUID;
  streetName?: string;
  postalCode?: string;
  postalCity?: string;
  postalProvince?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  createdAt: Date;
  createdBy: UUID;
  updatedAt?: Date;
  updatedBy?: UUID;
  deletedAt?: Date;
  deletedBy?: UUID;
}
