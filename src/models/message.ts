import type { messageListType } from '@/dataType/message';
// import { getMessage } from '@/service/message';
import getData from '../../mock/messageMock';
import type { Effect, Reducer, Subscription } from 'umi';
// import { messageArrToMap } from '@/utils/convertingDataFormat';

//state类型
export interface MessageModelState {
  allMessage: messageListType;
}

//model类型
export interface MessageModelType {
  namespace: string;
  state: MessageModelState;
  effects: {
    queryMessage: Effect;
  };
  reducers: {
    _updateMessage: Reducer<MessageModelState>;
  };
  subscriptions?: { setup: Subscription };
}

const MessageModel: MessageModelType = {
  namespace: 'messageModel',
  state: {
    allMessage: new Map(),
  },
  effects: {
    *queryMessage({ payload, callback }, { call, put }) {
      const response = yield call(getData, payload);
      console.log(response);
      const { code, data } = response;
      console.log(data);
      // console.log(messageArrToMap(data))
      if (code === 200) {
        yield put({
          type: '_updateMessage',
          data: data,
        });
        callback();
      } else {
        callback();
      }
    },
  },
  reducers: {
    _updateMessage(state, action) {
      console.log(action);
      return {
        ...(state as MessageModelState),
        allMessage: action.data,
      };
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname }) => {
  //       if (pathname === '/personalCenter') {
  //         dispatch({
  //           type: 'queryMessage',
  //         });
  //       }
  //     });
  //   },
  // },
};

export default MessageModel;
