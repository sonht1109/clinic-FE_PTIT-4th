import React from 'react';
import { SEventItem } from './styles';
import eventSrc from 'assets/images/dashboard/event-placeholder.png';
import { ICoreEvent } from '../store/types';
import { useIntl } from 'react-intl';
import adminEventMessages from 'containers/Admin/AdminEventManagement/store/message-trans';
import { EventStatusEnum } from 'enum';

export default function EventItem({ e }: { e: ICoreEvent }) {
  const intl = useIntl();

  const statusClassName = (status: EventStatusEnum) => {
    switch (status) {
      case EventStatusEnum['ACCEPTED']:
        return 'accepted';
      case EventStatusEnum['WAITING']:
        return 'waiting';
      case EventStatusEnum['CREATING']:
        return 'creating';
      case EventStatusEnum['FINISHED']:
        return 'finished'
      default:
        return 'waiting';
    }
  };

  return (
    <SEventItem>
      <div className="event-item__img">
        <img src={eventSrc} alt="event" width="100%" height="100%" />
      </div>
      <div className="event-item__name">{e.name}</div>
      <div className={`event-item__status ${statusClassName(e?.status)}`}>
        {intl.formatMessage({ ...adminEventMessages[e?.status] })}
      </div>
    </SEventItem>
  );
}
