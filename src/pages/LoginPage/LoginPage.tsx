import React from 'react';
import { FlexColumn } from '@/components';
import { BL, H1 } from '@/theme';
import color from '@/theme/color';
import { Container, LoginTitle } from './styles';
import { LoginForm } from './components';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <FlexColumn width="516px" height="500px" alignItems="center">
        <LoginTitle>
          <H1 color={color.blue[5]}>Work Unity</H1>
          <BL>쉽게 시작하는 HR</BL>
        </LoginTitle>

        <LoginForm />
      </FlexColumn>
    </Container>
  );
};

export default LoginPage;
