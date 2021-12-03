import request from '../request/request';
const { post } = request;

export async function getMessage(params: { userId: number }) {
  console.log(params);
  return post('/api/test', params);
}
