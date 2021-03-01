import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTextarea from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = { value: '' };

  handleChange = (inEvent) => {
    this.setState({ value: inEvent.target.value });
  };

  handleSubmit = (inEvent) => {
    console.log({ value: this.state.value });
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-textarea">
        <article className="message is-info">
          <div className="message-header">Preview:</div>
          <div className="message-body">
            <ReactTextarea
              placeholder="Please input your text..."
              className="textarea mb-2"
              autosize
              onChange={this.handleChange}
            />
            <button className="button is-primary" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </article>
        <article className="message">
          <div className="message-header">Value changed:</div>
          <div className="message-body">{JSON.stringify(this.state.value)}</div>
        </article>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
