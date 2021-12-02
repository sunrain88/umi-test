import type { FC } from 'react';
import { connect } from 'umi';

interface loginProps {}

const login: FC<loginProps> = ({}) => {
  return <div>hello Im login page</div>;
};

export default connect()(login);
