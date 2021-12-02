import type { FC } from 'react';
// import styles from './index.less';
import type { Dispatch } from 'umi';
import { connect } from 'umi';

interface homePageProps {
  dispatch: Dispatch;
}

const homePage: FC<homePageProps> = ({}) => {
  return (
    <div>
      <h2>hello Im homePage</h2>
    </div>
  );
};

export default connect()(homePage);
