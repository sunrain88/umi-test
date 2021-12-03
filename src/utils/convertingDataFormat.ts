import type { messageType } from '@/dataType/message';

export function messageArrToMap(messageArr: messageType[] | any) {
  return messageArr.map((item: messageType) => {
    return [item.originUserId, item];
  });
}
