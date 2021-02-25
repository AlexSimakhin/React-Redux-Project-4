import React from 'react';
import { useRecommendationFilms } from '../hooks/useRecommendationFilms';
import {Table, Image, Rate, PageHeader} from 'antd';
import { Link } from 'react-router-dom';


export const RecommendationFilms = () => {
  const { topRecommendationFilms } = useRecommendationFilms();

  const columns = [
    {
      title: 'Poster',
      dataIndex: 'poster_path',
      align: 'center',
      render: path => <Image src={path} alt="Poster" width={100} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      align: 'center',
      width: '20%',
      render: (text, record) => <Link to={`/films/${record.id}`}>{text}</Link>
    },
    {
      title: 'Popularity',
      dataIndex: 'popularity',
      align: 'center',
      width: '10%',
      render: popularity => <Rate allowHalf value={popularity}/>
    },
    {
      title: 'Release Date',
      dataIndex: 'release_date',
      align: 'center',
      width: '10%',
    },
    {
      title: 'Overview',
      dataIndex: 'overview',
      align: 'center',
    },
  ];

  return(
    <Table
      columns={columns}
      dataSource={topRecommendationFilms}
      pagination={false}
      title={() => (
        <PageHeader
          className="site-page-header"
          title="Recommendation films"
        />)
      }
      bordered
      rowKey="id"
    />
   )
}