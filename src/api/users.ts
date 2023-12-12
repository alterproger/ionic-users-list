import {
  type GetAllUsersResponseDto,
  type UserResponseDto,
} from '../types/types';

const API = 'https://randomuser.me/api';

const getAllUsers = async (): Promise<UserResponseDto[]> => {
  const urlSearchParams = new URLSearchParams({
    seed: 'list',
    results: '100',
    inc: 'name,picture',
  });

  const response = await fetch(`${API}?${urlSearchParams.toString()}`);
  const result = (await response.json()) as GetAllUsersResponseDto;

  return result.results;
};

export { getAllUsers };
