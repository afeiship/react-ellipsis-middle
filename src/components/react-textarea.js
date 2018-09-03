import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import autoSize from 'autosize';

export default class extends Component {
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

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value
    }
  }
  
  componentDidMount(){
    const { autosize } = this.props;
    autosize && autoSize(this.textarea);
  }

  _onChange = inEvent => {
    console.log('onchnge..');
    const { value } = inEvent.target;
    const { onChange } = this.props;
    this.setState({ value }, () => {
      onChange({ target: { value } });
    });
  };

  render() {
    const { autosize, onChange, className, ...props } = this.props;
    return (
      <div className={classNames('react-textarea', className)}>
        <textarea
          ref={ textarea => this.textarea = textarea }
          className="react-textarea-bd"
          value={ this.state.value }
          onChange={ this._onChange } { ...props } />
      </div>
    );
  }
}
