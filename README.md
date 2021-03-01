# react-textarea
> Textarea with text limit for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-textarea
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| autosize  | bool   | false    | -       | If auto height.                       |
| onChange  | func   | false    | noop    | The handler when value change.        |
| value     | string | false    | -       | The runtime value.                    |


## usage
1. import css
  ```scss
  @import "~@jswork/react-textarea/dist/style.css";

  // or use sass
  @import "~@jswork/react-textarea/dist/style.scss";

  // customize your styles:
  $react-textarea-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactTextarea from '@jswork/react-textarea';
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

  ```
## resources
- https://github.com/jackmoore/autosize

## documentation
- https://afeiship.github.io/react-textarea/


## license
Code released under [the MIT license](https://github.com/afeiship/react-textarea/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-textarea
[version-url]: https://npmjs.org/package/@jswork/react-textarea

[license-image]: https://img.shields.io/npm/l/@jswork/react-textarea
[license-url]: https://github.com/afeiship/react-textarea/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-textarea
[size-url]: https://github.com/afeiship/react-textarea/blob/master/dist/react-textarea.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-textarea
[download-url]: https://www.npmjs.com/package/@jswork/react-textarea
