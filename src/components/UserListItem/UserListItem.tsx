import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import { type UserWithId } from '../../types/types';

type Properties = {
  user: UserWithId;
  onRemove: (id: string) => void;
};

const UserListItem: React.FC<Properties> = ({ user, onRemove }) => {
  const handleRemoveUser = () => {
    onRemove(user.id);
  };

  return (
    <IonItemSliding>
      <IonItem button>
        <IonAvatar
          aria-hidden="true"
          slot="start"
        >
          <img
            alt={`Photo of ${user.name.first} ${user.name.last}`}
            src={user.picture.thumbnail}
          />
        </IonAvatar>
        <IonLabel>
          {user.name.first} {user.name.last}
        </IonLabel>
      </IonItem>
      <IonItemOptions
        slot="end"
        onIonSwipe={handleRemoveUser}
      >
        <IonItemOption
          color="danger"
          expandable
          onClick={handleRemoveUser}
        >
          <IonIcon
            slot="icon-only"
            icon={trash}
          />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export { UserListItem };
