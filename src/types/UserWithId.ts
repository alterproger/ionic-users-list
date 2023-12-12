import { type UserResponseDto } from './UserResponseDto';

type UserWithId = UserResponseDto & {
  id: string;
};

export { type UserWithId };
