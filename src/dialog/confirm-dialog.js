

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import * as Ratio from '../Ratio';

export default class ConfirmDialog extends Component {

  static propTypes = {
    onPressComfirm: PropTypes.func,
    onPressStop: PropTypes.func,
    comfirmText: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.any,
    type1Text: PropTypes.string,
    type2TextArray: PropTypes.array,
  };

  static defaultProps = {
    animationType: 'slide',
    transparent: false,
    comfirmText: 'OK',
    children: null,
    style: null,
    type1Text: 'OK',
    type2TextArray: ['STOP COOKING', 'CONTINNUE']
  };

  constructor(props) {
    super(props);
    this.setModalState = this.setModalState.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this._renderBtn = this._renderBtn.bind(this);
    this.state = {
      visible: false,
      transparent: false,
    };
  }

  renderTypeBtn = type => {
    const { onPressComfirm } = this.props;

    if(type == 'type1') {
      return (
        <TouchableOpacity onPress={onPressComfirm}>
          <View style={styles.footer}>
            {this._renderBtn(this)}
          </View>
        </TouchableOpacity>
      )
    } else if(type == 'type2') {
      return (
        this._renderBtnDouble(this)
      )
    }
  }

  render() {
    const { type, warnInfo } = this.props;

    return (
      <Modal
        animated={this.state.animated}
        transparent={this.state.transparent}
        visible={this.state.visible}
        onRequestClose={this.onRequestClose}
      >
        <View style={styles.container}>
          <View style={[styles.modal, this.props.style]}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {warnInfo}
              </Text>
            </View>
              { this.renderTypeBtn(type) }
          </View>
        </View>
      </Modal>
    );
  }

  _renderBtn(context) {
    const { type1Text } = this.props;

    return (
      <Text style={styles.btnText}>{type1Text}</Text>
    );
  }

  _renderBtnDouble = context => {
    const { type2TextArray, onPressComfirm, onPressStop } = this.props;

    return (
      <View style={styles.footerDouble}>
        <TouchableOpacity onPress={onPressStop}>
          <Text style={styles.btnText}>{type2TextArray[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressComfirm}>
          <Text style={styles.btnTextRight}>{type2TextArray[1]}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  setModalState(flag) {
    this.setState({ visible: flag, transparent: flag });
  }

  onRequestClose() {
    this.hide();
  }

  show() {
    this.setModalState(true);
  }

  hide() {
    this.setModalState(false);
  }

}

const styles = StyleSheet.create({
  container: {
    height: Ratio.convertY(667),
    backgroundColor: 'rgba(0, 0, 0, .7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: Ratio.convertX(310),
    height: Ratio.convertY(168),
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'relative',
    width: Ratio.convertX(310),
    height: Ratio.convertY(52),
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerDouble: {
    flexDirection: 'row',
    position: 'relative',
    width: Ratio.convertX(310),
    height: Ratio.convertY(52),
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btn: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'stretch',
    width: Ratio.convertX(310),
    height: Ratio.convertY(52),
  },
  headerText: {
    color: '#000',
    fontSize: Ratio.convertX(14),
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  btnText: {
    color: '#FFA110',
    fontSize: Ratio.convertX(12),
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  btnTextRight: {
    color: '#FFA110',
    fontSize: Ratio.convertX(12),
    marginHorizontal: Ratio.convertX(26),
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  }
});