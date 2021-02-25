import React from 'react';
import { BackTop } from 'antd';

import Styles from './styles.module.scss';

export const BackToTop = () => {
  return (
    <BackTop>
      <div className={Styles['back-to-top']}>UP</div>
    </BackTop>
  );
};
