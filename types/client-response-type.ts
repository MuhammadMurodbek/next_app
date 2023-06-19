export type ClientResponseType = {
  Users?: {
    id: number;
    avatar: string;
    createdAt: Date | string;
    full_name: string;
  };
  id: number;
  userId: number;
  avatar: string;
  createdAt?: Date | string;
  full_name: string;
  mail: string;
  organization: string;
  phone_number: string;
  status: string;
};
