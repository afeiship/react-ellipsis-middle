import React from 'react';
import ReactEllipsisMiddle from '../../src/main';
import styled from 'styled-components';
import '../../src/components/style.scss';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  return (
    <Container>
      <ReactEllipsisMiddle text="CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26" />
    </Container>
  );
};
