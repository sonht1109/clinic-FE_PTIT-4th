import { INotification } from './store/types';
import { SNotification } from './styles';

export default function Notification({ n }: { n: INotification }) {
  return (
    <SNotification isRead={n?.isRead || false}>
      <div className="notification__title">
        <span className="title">
          {n?.title}
        </span>
      </div>
      <span className="notification__timestamp">30 Phút trước</span>
      <div className="notification__content">{n?.content}</div>
    </SNotification>
  );
}
