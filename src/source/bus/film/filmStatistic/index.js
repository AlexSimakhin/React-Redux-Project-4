import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import {DollarOutlined, TrophyOutlined} from '@ant-design/icons'



export const FilmStatistic = ({ film }) => {

  return(
    <Row gutter={16}>
      <Col span={8} >
        <Card>
          <Statistic
            title='Popularity'
            precision={2}
            valueStyle={{ color: '#3F7CE1' }}
            prefix={<TrophyOutlined />}
            value={Number(film?.popularity).toLocaleString() || ''}/>
        </Card>
      </Col>
      <Col span={8} >
        <Card>
          <Statistic
            title='Budget'
            precision={0}
            valueStyle={{ color: '#28d7b5' }}
            prefix={<DollarOutlined />}
            value={Number(film?.budget).toLocaleString() || ''}/>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title='Revenue'
            precision={0}
            valueStyle={{ color: '#10C1BC' }}
            prefix={<DollarOutlined />}
            value={Number(film?.revenue).toLocaleString() || ''}/>
        </Card>
      </Col>
    </Row>)
}