import React from 'react';
import { Table, Layout as LayoutComponent, Image, PageHeader  } from 'antd';

import "antd/dist/antd.css";
import { usePopularFilms } from './hooks/usePopularFilms';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { BackToTop } from '../../elements/backToTop';
import { history } from './../../navigation/history';
import { Layout } from './../../components/layout/index';
import { LinkToFilm } from '../../elements/linkToFilm';

export const PopularFilms = () => {
  const { data, currentPage, _setCurrentPage } = usePopularFilms();

  const columns = [
    {
      title: 'Poster',
      dataIndex: 'poster_path',
      align: 'center',
      render: path => <Image src={path} alt="Poster" width={150} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      align: 'center',
      width: '20%',
      render: (text, record) => <LinkToFilm id={record.id} filmName={text}/>
    },
    {
      title: 'Popularity',
      dataIndex: 'popularity',
      align: 'center',
      width: '10%',
    },
    {
      title: 'Vote count',
      dataIndex: 'vote_count',
      align: 'center',
      width: '8%',
    },
    {
      title: 'Vote average',
      dataIndex: 'vote_average',
      align: 'center',
      width: '8%',
    },
    {
      title: 'Overview',
      dataIndex: 'overview',
      align: 'center',
    },
  ];

  const backToMainPage = () => {
    history.push('/');
  };

  const onChange = (pagination) => {
    if (currentPage !== pagination.current) { _setCurrentPage(pagination.current) }
  };

  return (
    <Layout>

      <Header />

      <LayoutComponent.Content>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
            pageSize: 20,
            defaultCurrent: 1,
            total: 2000,
            showSizeChanger: false,
            showQuickJumper: true
          }}
          onChange={onChange}
          title={() => (
            <PageHeader
              className="site-page-header"
              onBack={backToMainPage}
              title="Popular films"
              subTitle="To date, popular movies"
            />)
          }
          bordered
          rowKey="id"
        />
        <BackToTop />
      </LayoutComponent.Content>

      <Footer />

    </Layout>
  );
};
