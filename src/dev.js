import './dev.scss';
import ReactTextarea from './main';


class App extends React.Component{
  _onChange(args){
    console.log('test!',args);
  }
  render(){
    return (
      <div className="hello-react-textarea">
        <ReactTextarea onChange={this._onChange.bind(this)} />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
