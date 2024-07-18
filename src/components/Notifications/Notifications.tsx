import { Notification } from './Notification';

import { useNotification } from '@/hooks/useNotifications';

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotification();

  return (
    <div className="side-notifications">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  );
};
