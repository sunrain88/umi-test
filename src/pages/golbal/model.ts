// import {Effect,connect} from 'umi';
import type { userListType } from './data';

export interface globalState {
  userList: userListType;
}

export interface ModelType {
  namespace: string;
}
