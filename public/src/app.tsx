import React from 'react';
import ReactEllipsisMiddle from '../../src/main';
import styled from 'styled-components';
import '../../src/components/style.scss';

const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
  resize: horizontal;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  .react-ellipsis-middle {
    cursor: pointer;
    &:hover {
      transition: all 0.5s ease;
      background-color: #f60;
    }
  }
`;

export default (props: any) => {
  return (
    <Container>
      <ReactEllipsisMiddle size="120px">
        CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧
        - 2021-03-26
      </ReactEllipsisMiddle>

      <ReactEllipsisMiddle size="50%">
        CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧
        - 2021-03-26
      </ReactEllipsisMiddle>

      <ReactEllipsisMiddle>CSS 实现优惠券的技巧 - 2021-03-26</ReactEllipsisMiddle>
      <ReactEllipsisMiddle minSize="40px">
        我是一个很长的文件，我是一个很长的文件，但请始终保持我的后缀名.pdf
      </ReactEllipsisMiddle>
    </Container>
  );
};
