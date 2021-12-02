import '../assets/css/publicCss.css';
import { useDispatch, useSelector } from 'umi';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const { name, testData } = useSelector((store: any) => {
    console.log('store', store);
    return store?.testModel;
  });
  console.log(name);
  console.log(testData);
  // 改变名字
  const changeName = () => {
    dispatch({ type: 'testModel/save' });
  };
  // 发送请求
  const sendRequest = () => {
    dispatch({ type: 'testModel/query' });
  };
  console.log('自定义环境变量', REACT_APP_ENV);
  return (
    <div className={'mainBgColor'}>
      <div>自定义环境变量:{REACT_APP_ENV}</div>
      <div>我的名字:{name}</div>
      <div>testData的值:{testData}</div>
      <button onClick={changeName}>点击改变name</button>
      <button onClick={sendRequest}>发送请求</button>
    </div>
  );
};
export default IndexPage;
