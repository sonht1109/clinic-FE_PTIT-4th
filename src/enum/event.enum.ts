enum EventStatusEnum {
  CREATING = 'creating',
  WAITING = 'waiting',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
  PROCESSING = 'processing',
  FINISHED = 'finished',
}

enum EventActionEnum {
  LOCK = 'LOCK',
  UN_LOCK = 'UN_LOCK',
  VERIFY = 'VERIFY',
  DELETE = 'DELETE'
}

enum EventStepEnum {
  'ONE' = 1,
  'TWO',
  'THREE',
}

enum EventTypeConfigVoteEnum {
  BVOTE = 'bvote',
  MOMO = 'momo',
  BOTH = 'both',
}

enum EventTypeConfigEnum {
  VOTE = 'vote',
  EVALUATE = 'evaluate',
}

export {
  EventStatusEnum,
  EventActionEnum,
  EventStepEnum,
  EventTypeConfigVoteEnum,
  EventTypeConfigEnum,
};
