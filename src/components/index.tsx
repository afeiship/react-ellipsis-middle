import classNames from 'classnames';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';

export type ReactEllipsisMiddleProps = { className?: string; children?: string; size?: number | string; };
const CLASS_NAME = 'react-ellipsis-middle';

// https://codepen.io/xboxyan/pen/eYvveBe

export default class ReactEllipsisMiddle extends Component<ReactEllipsisMiddleProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    size: '50%',
  };

  get sizeStyle() {
    return { width: this.props.size }
  }

  render() {
    const { className, children, size, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...theProps}>
        <div className="is-fulltext">{children}</div>
        <div className="is-halftext">
          <div className="is-overlap" style={this.sizeStyle}>{children}</div>
          {children}
        </div>
      </div>
    );
  }
}
