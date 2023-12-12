import { IonList } from '@ionic/react';
import { DataStatus, useUsers } from '../../hooks/useUsers';
import { UserListItem } from '../UserListItem/UserListItem';
import { UserListItemSkeleton } from '../UserListItemSkeleton/UserListItemSkeleton';

const SKELETON_LIST_ITEM_ARRAY_LENGTH = 12;

const UserList = () => {
  const { users, removeUser, loadingDataStatus } = useUsers();

  const isLoading = loadingDataStatus === DataStatus.PENDING;

  return (
    <IonList inset>
      {isLoading
        ? Array.from(
            { length: SKELETON_LIST_ITEM_ARRAY_LENGTH },
            (_, index) => <UserListItemSkeleton key={index} />,
          )
        : users.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              onRemove={removeUser}
            />
          ))}
    </IonList>
  );
};

export { UserList };
