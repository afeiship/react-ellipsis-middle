# react-textarea
> 

## properties:
```javascript

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
  
```

## install && import:
```bash
npm install --save afeiship/react-textarea --registry=https://registry.npm.taobao.org
```

```js
import ReactTextarea from 'react-textarea';
```

```scss
// customize your styles:
$react-textarea-options:(
);

@import 'node_modules/react-textarea/dist/style.scss';
```


## usage:
```jsx

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

```
