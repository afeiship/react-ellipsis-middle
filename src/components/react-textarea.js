import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import autoSize from 'autosize';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    autosize: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    autosize: true,
    onChange: noop
  };
  /*===properties end===*/

  componentDidMount() {
    const { autosize } = this.props;
    autosize && autoSize(this.textarea);
  }

  render() {
    const { autosize, className, ...props } = this.props;
    return (
      <textarea
        ref={textarea => this.textarea = textarea}
        className={classNames('react-textarea', className)}{...props} />
    );
  }
}
