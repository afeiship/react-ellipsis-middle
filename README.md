# react-textarea
> Textarea with text limit for react.

## installation
```shell
npm install -S @feizheng/react-textarea
```

## update
```shell
npm update @feizheng/react-textarea
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | -      | -       | -           |
| onChange  | -      | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-textarea/dist/style.scss";

  // customize your styles:
  $react-textarea-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactTextarea from '@feizheng/react-textarea';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactTextarea />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-textarea/

## resources
- https://github.com/jackmoore/autosize
