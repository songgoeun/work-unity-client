import React from 'react';
import { Button } from 'antd';
import { BM } from '@/theme';
import { IconPlayerPlayFilled, IconUserShare } from '@tabler/icons-react';
import { Container } from './styles';

const Worker: React.FC = () => {
  return (
    <Container>
      <Button
        size="large"
        type="primary"
        style={{ display: 'flex', alignItems: 'center' }}
        icon={<IconPlayerPlayFilled size={20} />}
      >
        <BM>근무 시작</BM>
      </Button>

      <Button
        size="large"
        style={{ display: 'flex', alignItems: 'center' }}
        icon={<IconUserShare size={20} />}
      >
        <BM>내 프로필</BM>
      </Button>
    </Container>
  );
};

export default Worker;
