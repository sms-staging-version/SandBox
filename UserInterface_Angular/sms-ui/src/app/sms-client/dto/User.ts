import { Address } from './Address';

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  trainingAddress: Address;
  personalAddress: Address;

}
