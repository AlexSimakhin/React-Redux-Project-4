import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {topRatedMoviesActions} from "../actions";

export const useTopRatedFilms = () => {
  const dispatch = useDispatch();

  const {data, isFetching, error} = useSelector((state) => state.topRated);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(topRatedMoviesActions.getTopRatedAsync(currentPage));
  }, [dispatch, currentPage]);

  return {data, isFetching, error, currentPage, setCurrentPage};
};
