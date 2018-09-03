import './dev.scss';
import ReactTextarea from './main';

/*===example start===*/

// install: npm install afeiship/react-textarea --save
// import : import ReactTextarea from 'react-textarea'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-textarea">
        <ReactTextarea ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
