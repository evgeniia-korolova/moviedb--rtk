import React from 'react';
import s from './FavoriteCard.module.scss'
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from '../../../data/reducers/favoriteMoviesReducer';

const FavoriteCard = ({ favoriteMovie }) => {

  let dispatch = useDispatch();
  const imgUrl = 'https://tmdb.org/t/p/w500';
    
  let imgSrc = favoriteMovie.backdrop_path
  let path = `${imgUrl}${imgSrc}`;

  const removeFromFavoriteHandler = () => {
    dispatch(removeFromFavorite(favoriteMovie.id))
  }
  return (
    <div className={s.FavoriteCard}>
            
            <div className={s.FavoriteCardImg}>
                <img src={path} alt={favoriteMovie.title} />
            </div>
            <h2>{favoriteMovie.title}</h2>
            <p>Language : {favoriteMovie.original_language}</p>
            {/* <p>{movie.overview}</p> */}
            <p>{ }</p>
            <button onClick={() => removeFromFavoriteHandler()} >Delete</button>
            
        </div>
  )
}

export default FavoriteCard