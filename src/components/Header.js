import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className="App-header">
			<Link
				className="App-logo"
				to="/"
			>
				{props.title}
			</Link>
		</header>
	)
};

Header.propTypes = {
	title: PropTypes.string
};

export default Header;
