# react-textarea
> Textarea with text limit for react.

## size:
+ 4.0K	react-textarea.js
+  20K	react-textarea.js.map

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## props:
```java
  static propTypes = {
    className:PropTypes.string,
    max:PropTypes.number,
    onChange:PropTypes.func,
  };
```


## usage:
```jsx
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
```
