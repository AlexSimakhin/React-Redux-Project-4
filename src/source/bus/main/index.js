import React from 'react';
import 'antd/dist/antd.css';
import Styles from './styles/styles.module.scss'
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {mainActions} from './redux/actions';
import { Card, Tabs, Layout as LayoutComponent } from "antd";
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { BackToTop } from '../../elements/backToTop';
import { Layout } from './../../components/layout/index';

const {TabPane} = Tabs;
const {Meta} = Card;

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainActions.fetchAsync('day'));
  }, [dispatch]);

  const trending = useSelector(state => state.trending).data;
  const renderTrending = trending => {
    if (Array.isArray(trending)) {
      return (
        <div className={Styles.trending_wrapper}>
          {trending.map((film, index) => {
            return (
              <Link key={`film_${index}`} to={`/films/${film?.id}`}>
                <Card
                  title={film.title}
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="poster"
                              src={film.poster_path} />}
                >
                  <Meta title={film.overview} description={film.release_year}
                        style={{ overflow: "scroll" }} />
                </Card>
              </Link>
            )
          })}
        </div>
      )

    }
  };
  const handlerOnTabClick = (key) => {
    dispatch(mainActions.fetchAsync(key));
  };

  return (
    <Layout>
      <Header />

      <LayoutComponent.Content>
        <h1 className={Styles.h1}>TRENDING MOVIES</h1>
        <Tabs defaultActiveKey="day" centered onTabClick={handlerOnTabClick}>
          <TabPane tab="За сегодня" key="day">
            {renderTrending(trending)}
          </TabPane>
          <TabPane tab="За неделю" key="week">
            {renderTrending(trending)}
          </TabPane>
        </Tabs>

        <BackToTop />
      </LayoutComponent.Content>

      <Footer />
    </Layout>
  )
};
