import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { MOVIE_BASE_PATH, MOVIE_API } from './api';
import Movie from './Movie';

class MoviesList extends PureComponent {
	state = {
		movies: []
	}

	async componentDidMount() {
		try {
			const res = await fetch(`${MOVIE_BASE_PATH}discover/movie?${MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
			const movies = await res.json();
			console.log(movies);
			this.setState({
				movies: movies.results
			})
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { movies } = this.state;

		return (
			<MovieGrid>
				{movies.map(movie => <Movie key={movie.id} movie={movie} />)}
			</MovieGrid>
		);
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
	padding: 1rem;
`;
