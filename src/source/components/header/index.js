import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import Styles from './styles/index.module.scss';
import { book } from './../../navigation/book';
import { useCurrentPage } from './hooks/useCurrentPage';
import {useLatestFilms} from "../../bus/latestFilms/hooks/useLatestFilms";

export const Header = () => {
  const [pageKey] = useCurrentPage();

  return (
    <Layout.Header className={Styles.header}>
      <div className={Styles.logo} />

      <Menu className={Styles.nav} theme="dark" mode="horizontal" selectedKeys={[pageKey]}>
        <Menu.Item key="1"><Link to={book.root}>Main</Link></Menu.Item>
        <Menu.Item key="2"><Link to={book.films}>Films</Link></Menu.Item>
        <Menu.Item key="3"><Link to={book.popularFilms}>Popular films</Link></Menu.Item>
        <Menu.Item key="4"><Link to={book.topRatedFilms}>Top rated films</Link></Menu.Item>
        <Menu.Item key="5"><Link to={book.latestFilms.url} >Latest film</Link></Menu.Item>
      </Menu>
    </Layout.Header>
  );
};