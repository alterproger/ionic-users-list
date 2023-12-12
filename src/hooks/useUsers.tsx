import { useEffect, useState } from 'react';
import { getAllUsers } from '../api/users';
import { type UserWithId } from '../types/types';

const DataStatus = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
} as const;

type DataStatusKey = keyof typeof DataStatus;

const useUsers = () => {
  const [users, setUsers] = useState<UserWithId[]>([]);
  const [loadingDataStatus, setLoadingDataStatus] =
    useState<(typeof DataStatus)[DataStatusKey]>('idle');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoadingDataStatus('pending');
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
      setLoadingDataStatus('fulfilled');
    };

    fetchUsers();
  }, []);

  const removeUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return {
    users,
    loadingDataStatus,
    removeUser,
  };
};

export { useUsers, DataStatus };
