import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe( 'Button', () => {
	describe( 'basic rendering', () => {
		it( 'should render a Button element with a value of "Continue"', () => {
			const button = shallow( <Button isPrimary>Continue</Button> );
			expect( button.render().hasClass( 'muriel-button' ) ).toBe( true );
		} );
	} );
	describe( 'rendering default', () => {
		it( 'should render a Button element with a class of is-default', () => {
			const button = shallow( <Button isDefault>Continue</Button> );
			expect( button.render().children('button').hasClass( 'is-default' ) ).toBe( true );
		} );
	} );
	describe( 'rendering primary', () => {
		it( 'should render a Button element with a class of is-primary', () => {
			const button = shallow( <Button isPrimary>Continue</Button> );
			expect( button.render().children('button').hasClass( 'is-primary' ) ).toBe( true );
		} );
	} );
	describe( 'rendering tertiary', () => {
		it( 'should render a Button element with a class of is-tertiary', () => {
			const button = shallow( <Button isTertiary>Continue</Button> );
			expect( button.render().children('button').hasClass( 'is-tertiary' ) ).toBe( true );
		} );
	} );
} );