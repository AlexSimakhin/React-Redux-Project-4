import { Link } from 'react-router-dom';


export const LinkToFilm = ({id, filmName}) => {
  return (
    <Link to={`/films/${id}`}>{filmName}</Link>
  );
};