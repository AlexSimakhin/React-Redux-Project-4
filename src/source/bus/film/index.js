import React from 'react';
import { Layout } from '../../components/layout';
import { Header} from '../../components/header';
import { Footer } from '../../components/footer';
import { BackToTop} from '../../elements/backToTop';
import { useParams } from 'react-router-dom';
import { Spin, Alert, Layout as LayoutComponent } from 'antd';
import { useInitFilm } from './hooks/useInitFilm';
import { FilmDescription } from './filmDescription';
import { FilmStatistic } from './filmStatistic';
import { RecommendationFilms } from './recommendationFilms';
import { SimilarFilms } from './similarFilms';
import { Reviews } from './reviews';


export const Film = () => {
  const { filmId } = useParams();
  const { selectedFilm, reviews, isFetching, error } = useInitFilm(filmId);

  if(error){
    return (
      <Layout>
        <Header/>
        <LayoutComponent.Content>
          <Alert
            message="Error"
            description={error.message}
            type="error"
            closable
          />
        </LayoutComponent.Content>
        <Footer />
      </Layout>
    )
  }


  return(
    <Layout>
      <Header/>
      <LayoutComponent.Content>
        {isFetching ? <Spin size='large'/> :
          <>
            <FilmDescription film={selectedFilm}/>
            <FilmStatistic film={selectedFilm}/>
            <Reviews reviews={reviews}/>
            <SimilarFilms />
            <RecommendationFilms />
          </>}
      </LayoutComponent.Content>
      <BackToTop />
      <Footer />
    </Layout>
   )
}
;
