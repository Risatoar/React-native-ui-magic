import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

const hairlineWidth = StyleSheet.hairlineWidth;

export default class Divider extends Component {
	static propTypes = {
    style: ViewPropTypes.style,
    color: ColorPropType,
    visible: React.PropTypes.bool,
  };

  static defaultProps = {
    visible: true
	};
	
	render() {
		const { style, visible } = this.props;
		const visibleStyle = new Object();
		
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