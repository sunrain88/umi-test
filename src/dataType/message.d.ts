export type messageType = {
  messageContent: string; //消息内容
  messageId: number; //消息id
  messageType: number; //消息类型
  replyId?: number; //回复消息的id
  originUserId: number; //用户id
  targetUserId: number;
  userAvatar: string; //用户头像
  userNick: string; //用户昵称
  sendTime: number; //发送时间
};

export type messageListType = Map<string | number, messageType>;
