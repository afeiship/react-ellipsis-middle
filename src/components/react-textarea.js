import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    placeholder:React.PropTypes.string,
    max:React.PropTypes.number,
    onChange:React.PropTypes.func,
  };

  static defaultProps = {
    placeholder:'Placeholder...',
    max:20,
    onChange:null
  };

  constructor(props){
    super(props);
    this.state={
      length:0,
      value:'',
    };
  }

  _onChange(ev){
    var value = ev.target.value;
    var length = value.length;
    if (length <= this.props.max) {
      this.setState({
        value:value,
        length: length
      });
    }
    
    this.props.onChange && this.props.onChange({
      event:ev,
      sender:this
    });
  }

  render(){
    return (
      <div className={classNames('react-textarea',this.props.cssClass)}>
        <textarea
          className="react-textarea-bd"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this._onChange.bind(this)}></textarea>
        <div className="react-textarea-ft">{this.state.length}/{this.props.max}</div>
      </div>
    );
  }
}
