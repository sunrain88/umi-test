import type { FC } from 'react';
import { connect } from 'umi';
// import themeStyle from '../../../assets/css/theme.less';
import style from './style.less';

interface newWin {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}
interface personalCenterProps {}

const personalCenter: FC<personalCenterProps> = ({}) => {
  const handleClick = (params: newWin) => {
    const { width, height, x, y } = params;
    window.open(
      '/login',
      '_blank',
      `height=${height},width=${width},top=${y},left=${x},resizable=no,location=no,status=no,Menubar=no,toolbar=no`,
    );
    console.log(width, height, x, y);
  };

  return (
    <div className={`${style.personalCenter}`}>
      <h2> hello Im personalCenter page</h2>
      <div
        className={style.openBtn}
        onClick={() => {
          handleClick({ width: 375, height: 700, x: 500, y: 200 });
        }}
      >
        click me
      </div>
    </div>
  );
};

export default connect()(personalCenter);
