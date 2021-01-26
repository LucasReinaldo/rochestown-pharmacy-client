import React from 'react';

import { Container } from './styles';

const Button = ({ children, bgColor, ...rest }) => {
  return (
    <Container type="submit" bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
