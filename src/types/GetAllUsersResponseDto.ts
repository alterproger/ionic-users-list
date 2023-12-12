type GetAllUsersResponseDto = {
  results: UserResponseDto[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};
