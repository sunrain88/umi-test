import type { messageType } from '../src/dataType/message';
// import type { Request, Response } from 'express';
import mockjs from 'mockjs';

const fakeList = (id: number, count: number) => {
  const list: messageType[] = [];
  for (let i = 0; i < count; i++) {
    list.push(
      mockjs.mock({
        'userId|1-10': 10,
        messageId: i + +new Date(),
        messageContent: mockjs.mock('@csentence(2, 20)'),
      }),
    );
  }
  return list;
};

const getData = (req: any) => {
  const { count } = req;
  const result = fakeList(1, count);
  const temp = { code: 200, data: result, message: 'success' };
  console.log(req);
  return temp;
};

export default getData;

// export default {
//   'POST /api/test': getData,
// };
