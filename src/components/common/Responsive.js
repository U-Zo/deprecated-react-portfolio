import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
  width: 1024px;
  
  @media (max-width: 1024px) {
    width: 768px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({children, ...rest}) => {
    // style, className, onClick, onMouseMove 등의 props 를 사용할 수 있도록
    // ...rest 를 이용하여 ResponsiveBlock 에게 전달
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
};

export default Responsive;