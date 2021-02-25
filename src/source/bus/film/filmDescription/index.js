import React from 'react';
import {  Descriptions, Row, Col, Image } from 'antd';


export const FilmDescription = ({ film }) => {

  const listOfGenres = film?.genres.length > 0 ? film?.genres.join('; ') : '';
  return(
    <>
      <Row justify='center' align='center' >
        <Col span={12} offset={6}>
          <Image
            preview={false}
            alt={film?.title}
            src={film?.poster_path ?? ''}
            width={250}/>
        </Col>
      </Row>

      <Descriptions
        labelStyle={{ 'textAlign': 'left'}}
        title={film?.title}
        layout='horizontal'
        column={2} bordered>
        <Descriptions.Item span={2} label='Genres'>{listOfGenres}</Descriptions.Item>
        <Descriptions.Item label='Status' >{film?.status}</Descriptions.Item>
        <Descriptions.Item label='Release Date'>{film?.release_date ?? ''}</Descriptions.Item>
        <Descriptions.Item label='Average Score'>{film?.vote_average ?? ''}</Descriptions.Item>
        <Descriptions.Item label='Vote Count'>{film?.vote_count ?? ''}</Descriptions.Item>
        <Descriptions.Item span={2} label="Overview">{film?.overview ?? ''}</Descriptions.Item>
      </Descriptions>

    </>
   )
}
