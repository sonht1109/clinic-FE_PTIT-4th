import { INotification } from 'containers/Layout/LoggedInLayout/Header/Bell/store/types';
import { useEffect, useRef, useState } from 'react';
import { FaCheckSquare, FaEllipsisH, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { handleMarkAsRead } from './store/actions';
import { SAction, SNotification } from './style';

export default function Notification({ n }: { n: INotification }) {
  return (
    <SNotification isRead={n?.isRead || false}>
      <ActionButton id={n?.id} isRead={n?.isRead || false} />
      <div className="notification__title">
        <span className="title">{n?.title}</span>
      </div>
      <span className="notification__timestamp">30 Phút trước</span>
      <div className="notification__content">{n?.content}</div>
    </SNotification>
  );
}

const ActionButton = ({ id, isRead }: { id: string; isRead: boolean }) => {
  const [state, setState] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const refCurrent = ref.current as any;
    const listener = (event: Event) => {
      if (refCurrent && !refCurrent.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [setState]);

  return (
    <div
      className="action-btn"
      onClick={() => setState(prev => !prev)}
      ref={ref}
      key={id}
    >
      <FaEllipsisH size={16} color="#A6B0CF" />
      {state && <Actions id={id} isRead={isRead} />}
    </div>
  );
};

const Actions = ({ id, isRead }: { id: string; isRead: boolean }) => {
  const dispatch = useDispatch();

  return (
    <SAction>
      {!isRead && (
        <div
          className="action-item"
          onClick={() => {
            dispatch(handleMarkAsRead(id));
          }}
        >
          <div className="action-item__icon">
            <FaCheckSquare size={16} color="#A6B0CF" />
          </div>
          <span className="action-item__label">Đánh dấu là đã đọc</span>
        </div>
      )}
    </SAction>
  );
};
