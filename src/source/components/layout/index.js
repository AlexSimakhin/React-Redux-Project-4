import React from 'react';
import { Layout as LayoutComponent } from 'antd';

import Styles from './styles/index.module.scss';

export const Layout = (props) => {
  return (
    <LayoutComponent className={Styles.section}>{props.children}</LayoutComponent>
  );
};
