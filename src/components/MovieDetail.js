import React, { Component } from 'react';
import styled from  'styled-components';
import Overdrive from 'react-overdrive';
import {
	MOVIE_BASE_PATH,
	MOVIE_API,
	POSTER_PATH,
	BACKDROP_PATH
} from '../data/api';

import {Poster} from './Movie';

class MovieDetail extends Component {
	state = {
		movie: {}
	}

	async componentDidMount() {
		try {
			const res = await fetch(`${MOVIE_BASE_PATH}movie/${this.props.match.params.id}?${MOVIE_API}&language=en-US`);
			const movie = await res.json();
			console.log(movie);
			this.setState({
				movie
			})
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const {movie} = this.state;
		const releaseDate = new Date(movie.release_date);
		const releaseDateFormatted = releaseDate.toLocaleDateString('en-US', {timeZone: 'UTC'});

		return (
			<MovieWrapper
				className="MovieWrapper"
				backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
			>
				<MovieInfo>
					<Overdrive id={movie.title}>
						<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
					</Overdrive>
					<div>
						<h1>{movie.title}</h1>
						<h3>{releaseDateFormatted}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		);
	}
}

export default MovieDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background: url(${props => props.backdrop}) no-repeat;
	background-size: cover;
`;


const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`;