import { type GetAllUsersResponseDto, type UserWithId } from '../types/types';

const API = 'https://randomuser.me/api';

const getAllUsers = async (): Promise<UserWithId[]> => {
  const urlSearchParams = new URLSearchParams({
    seed: 'list',
    results: '100',
    inc: 'name,picture',
  });

  const response = await fetch(`${API}?${urlSearchParams.toString()}`);
  const result = (await response.json()) as GetAllUsersResponseDto;

  return result.results.map((user, index) => ({
    ...user,
    id: `${user.name.first}-${user.name.last}-${index}`,
  }));
};

export { getAllUsers };
