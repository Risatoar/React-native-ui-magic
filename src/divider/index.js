import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes, ColorPropType } from 'react-native';

const hairlineWidth = StyleSheet.hairlineWidth;

export default class Divider extends Component {
	static propTypes = {
    style: ViewPropTypes.style,
    color: ColorPropType,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: true
	};
	
	render() {
		const { style, visible } = this.props;
		let visibleStyle = new Object();
		
		visibleStyle = visible ? null : { backgroundColor: 'transparent' };

		return <View style={[styles.container, style, visibleStyle]} />
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: hairlineWidth,
  },
});