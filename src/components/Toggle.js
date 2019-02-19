import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {toggleMessage} from '../actions';

const Toggle = ({messageVisibility, toggleMessage}) => (
	<React.Fragment>
		<button onClick={toggleMessage}>Toggle Me</button>

		{messageVisibility &&
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempore aut totam eos consequatur itaque laborum dolor adipisci earum, alias porro minus nam voluptas minima delectus est? Doloremque, iste pariatur!</p>
		}
	</React.Fragment>
);

const mapStateToProps = (state) => ({
	messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
