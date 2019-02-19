import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from  'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';
import { getMovie, resetMovie } from './actions';

import {
	POSTER_PATH,
	BACKDROP_PATH
} from './api';


class MovieDetail extends Component {

	componentDidMount() {
		const {
			match,
			getMovie
		} = this.props;
		getMovie(match.params.id);
	}

	componentWillUnmount() {
		const {resetMovie} = this.props;
		resetMovie();
	}

	render() {
		const {movie} = this.props;
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

const mapStateToProps = state => ({
	movie: state.movies.movie,
	movieLoaded: state.movies.movieLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getMovie,
	resetMovie
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

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