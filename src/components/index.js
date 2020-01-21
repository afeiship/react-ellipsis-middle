import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import autoSize from 'autosize';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-textarea';

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    autosize: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
  };

  static defaultProps = {
    onChange: noop
  };

  componentDidMount() {
    const { autosize } = this.props;
    autosize && autoSize(this.textarea);
  }

  render() {
    const { autosize, className, ...props } = this.props;
    return (
      <textarea
        ref={(textarea) => (this.textarea = textarea)}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
