import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    max:PropTypes.number,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    max:20,
  };

  constructor(props){
    super(props);
    this.state={
      length:0,
      value:'',
      onChange:noop
    };
  }

  _onChange(ev){
    var value = ev.target.value;
    var length = value.length;
    if (length <= this.props.max) {
      this.setState({ value, length },()=>{
        this.props.onChange(this)
      });
    }
  }

  render(){
    const {className,...props} = this.props;
    return (
      <div className={classNames('react-textarea',this.props.className)}>
        <textarea
          {...props}
          className="react-textarea-bd"
          value={this.state.value}
          onChange={this._onChange.bind(this)}></textarea>
        <div className="react-textarea-ft">{this.state.length}/{this.props.max}</div>
      </div>
    );
  }
}
