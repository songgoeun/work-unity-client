import React from 'react';
import { IconBuildingFactory, IconHome, IconUsersGroup } from '@tabler/icons-react';
import { BM } from '@/theme';
import { Container, Menu } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Menu isSelected={true}>
        <IconHome />
        <BM>홈</BM>
      </Menu>

      <Menu isSelected={false}>
        <IconBuildingFactory />
        <BM>휴가</BM>
      </Menu>

      <Menu isSelected={false}>
        <IconUsersGroup />
        <BM>구성원</BM>
      </Menu>
    </Container>
  );
};

export default MenuBar;
