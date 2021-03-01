import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import autoSize from 'autosize';

const CLASS_NAME = 'react-textarea';

export default class ReactTextarea extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If auto height.
     */
    autosize: PropTypes.bool,
    /**
     * The handler when value change.
     */
    onChange: PropTypes.func,
    /**
     * The runtime value.
     */
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
