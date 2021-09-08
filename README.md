# react-ellipsis-middle
> Ellipsis in middle for single line text.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ellipsis-middle
```

## properties
__GENERATE_DOCS__

## usage
1. import css
  ```scss
  @import "~@jswork/react-ellipsis-middle/dist/style.css";

  // or use sass
  @import "~@jswork/react-ellipsis-middle/dist/style.scss";

  // customize your styles:
  $react-ellipsis-middle-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactEllipsisMiddle from '@jswork/react-ellipsis-middle';
  import styled from 'styled-components';
  import '../../src/components/style.scss';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactEllipsisMiddle size="120px">
          CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26
        </ReactEllipsisMiddle>

        <ReactEllipsisMiddle size="50%">
          CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26
        </ReactEllipsisMiddle>
      </Container>
    );
  };

  ```

## license
Code released under [the MIT license](https://github.com/afeiship/react-ellipsis-middle/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ellipsis-middle
[version-url]: https://npmjs.org/package/@jswork/react-ellipsis-middle

[license-image]: https://img.shields.io/npm/l/@jswork/react-ellipsis-middle
[license-url]: https://github.com/afeiship/react-ellipsis-middle/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ellipsis-middle
[size-url]: https://github.com/afeiship/react-ellipsis-middle/blob/master/dist/react-ellipsis-middle.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ellipsis-middle
[download-url]: https://www.npmjs.com/package/@jswork/react-ellipsis-middle
