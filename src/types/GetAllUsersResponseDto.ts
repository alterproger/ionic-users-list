import { type UserResponseDto } from './UserResponseDto';

type GetAllUsersResponseDto = {
  results: UserResponseDto[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};

export { type GetAllUsersResponseDto };
