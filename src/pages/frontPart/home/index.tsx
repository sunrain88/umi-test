import type { FC } from 'react';
import { useEffect } from 'react';
// import styles from './index.less';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import { Chat } from 'react-jwchat';

interface homePageProps {
  dispatch: Dispatch;
}

const HomePage: FC<homePageProps> = ({ dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'messageModel/queryMessage',
      payload: { count: 20 },
      callback: () => {},
    });
    return () => {};
  }, []);

  return (
    <div>
      <h2>hello Im homePage</h2>
      <div>
        <Chat />
      </div>
    </div>
  );
};

export default connect()(HomePage);
