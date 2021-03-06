/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { ButtonGroup as BaseComponent } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Button Group.
 */
class ButtonGroup extends Component {
	/**
	 * Render.
	 */
	render() {
		const { className, ...otherProps } = this.props;
		const classes = classnames( 'newspack-button-group', className );
		return <BaseComponent className={ classes } { ...otherProps } />;
	}
}

export default ButtonGroup;
