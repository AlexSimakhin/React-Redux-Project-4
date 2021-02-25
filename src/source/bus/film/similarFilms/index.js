import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'antd/lib/card';
import Meta from 'antd/lib/card/Meta';
import List from 'antd/lib/list';
import { useSimilarFilms } from '../hooks/useSimilarFilms'


export const SimilarFilms = () => {
  const { topSimilarFilms } = useSimilarFilms();
  return (
    <section>
      <h2>Similar Films</h2>
      <List
        grid={{gutter: 16, column: 5}}
        dataSource={topSimilarFilms}
        renderItem={item => (
          <Link to={`/films/${item?.id}`}>
            <List.Item>
              <Card
                hoverable
                title={item.title}
                cover={<img alt={item.title} src={item.poster_path}/>}
              >
                <Meta description={item.overview} title={item.release_date}/>
              </Card>
            </List.Item>
          </Link>
        )}
      />

    </section>)
};
