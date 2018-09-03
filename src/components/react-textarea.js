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

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value
    }
  }

  componentDidMount() {
    const { autosize } = this.props;
    autosize && autoSize(this.textarea);
  }

  _onChange = inEvent => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    this.setState({ value }, () => {
      onChange({ target: { value } });
    });
  };

  render() {
    const { autosize, onChange, className, ...props } = this.props;
    return (
      <textarea
        ref={textarea => this.textarea = textarea}
        className={classNames('react-textarea', className)}
        value={this.state.value}
        onChange={this._onChange} {...props} />
    );
  }
}
