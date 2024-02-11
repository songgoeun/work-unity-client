import React from 'react';
import { Sider } from '@/components';
import { BaseBody, BaseContainer, Container } from './styles';

interface WithBaseComponentProps {
  components: React.ReactNode;
}

const WithBaseComponent: React.FC<WithBaseComponentProps> = ({ components }) => {
  return (
    <Container>
      <BaseContainer>
        <Sider />
        <BaseBody>{components}</BaseBody>
      </BaseContainer>
    </Container>
  );
};

export default WithBaseComponent;
