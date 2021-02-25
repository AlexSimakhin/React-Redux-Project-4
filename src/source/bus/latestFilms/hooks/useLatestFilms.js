import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { latestFilmsActions } from '../actions';

export const useLatestFilms = () => {

    const dispatch = useDispatch();
    const { isLoading, error, latestFilms } = useSelector((state) => state.latestFilms);

    useEffect(() => {
        dispatch(latestFilmsActions.fetchAsync());
    }, [dispatch]);

    return {
        isLoading,
        error,
        latestFilms,
    };
};