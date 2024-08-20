import { useSelector } from 'react-redux';
import s from './Favorite.module.scss';
import FavoriteCard from './FavoriteCard/FavoriteCard';

const Favorite = () => {

    let favoriteMovies = useSelector(state => state.favoriteMovies.favorite)
    return (
        <div className={s.Favorite}>            
            <div className={s.collection}>
                {
                    favoriteMovies.map((favoriteMovie) => <FavoriteCard key={favoriteMovie.id} favoriteMovie={favoriteMovie} />)
                }
            </div>
            
        </div>
    )
}

export default Favorite;