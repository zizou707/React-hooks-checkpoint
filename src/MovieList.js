import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="blog-list">
      {movies.map(movie => (
        <div className="blog-preview" key={movie.id} >
          <Link to={`/movies/${movie.id}`}>
            <img  src={movie.image} ></img>
            <h2>{ movie.title }</h2>
            <h4> {movie.subtitle}</h4>
            <p>Description : { movie.description }</p>
            <p>Year : {movie.year}</p>
            <p>Rating : {movie.rating}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default MovieList;