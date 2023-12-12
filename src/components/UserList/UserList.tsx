import { IonList } from '@ionic/react';
import { useUsers } from '../../hooks/useUsers';
import { UserListItem } from '../UserListItem/UserListItem';

const UserList = () => {
  const { users, removeUser } = useUsers();

  return (
    <IonList inset>
      {users.map((user) => (
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
