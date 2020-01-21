import ReactTextarea from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  onChange = (inEvent) => {
    console.log('event.target.value', inEvent.target.value);
  };

  render() {
    return (
      <div className="app-container">
        <ReactTextarea autosize onChange={this.onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
