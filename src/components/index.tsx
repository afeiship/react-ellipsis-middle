import classNames from 'classnames';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';

const CLASS_NAME = 'react-ellipsis-middle';

export type ReactEllipsisMiddleProps = {
  /**
   * The extended class name.
   */
  className?: string;
  /**
   * The text to display.
   */
  children?: string;
  /**
   * The width of ellipsis to display.
   */
  size?: number | string;
  /**
   * The min width of the text.
   */
  minSize: number | string;
};

// https://codepen.io/xboxyan/pen/eYvveBe

export default class ReactEllipsisMiddle extends Component<ReactEllipsisMiddleProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = { size: '50%', minSize: 0 };

  get sizeStyle() {
    const { size, minSize } = this.props;
    return { width: size, minWidth: minSize };
  }

  render() {
    const { className, children, size, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...theProps}>
        <div className="is-fulltext">{children}</div>
        <div className="is-halftext">
          <div className="is-overlap" style={this.sizeStyle}>
            {children}
          </div>
          {children}
        </div>
      </div>
    );
  }
}
