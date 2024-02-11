import React from 'react';
import { Divider } from 'antd';
import { Container } from './styles';
import { CompanyLogo, MenuBar, Worker } from './components';

const Sider: React.FC = () => {
  return (
    <Container>
      <CompanyLogo />

      <Divider style={{ margin: '10px 0' }} />

      <Worker />

      <Divider style={{ margin: '10px 0' }} />

      <MenuBar />
    </Container>
  );
};

export default Sider;
