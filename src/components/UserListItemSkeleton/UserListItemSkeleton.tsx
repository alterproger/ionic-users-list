import { IonAvatar, IonItem, IonLabel, IonSkeletonText } from '@ionic/react';

const UserListItemSkeleton = () => {
  return (
    <IonItem>
      <IonAvatar
        aria-hidden="true"
        slot="start"
      >
        <IonSkeletonText animated />
      </IonAvatar>
      <IonLabel>
        <IonSkeletonText
          animated
          style={{ width: '60%' }}
        />
      </IonLabel>
    </IonItem>
  );
};

export { UserListItemSkeleton };
