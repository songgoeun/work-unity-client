import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Container } from './styles';

const LoginForm: React.FC = () => {
  return (
    <Container>
      <Form name="loginForm" initialValues={{ remember: true }}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
        >
          <Input
            height={40}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="email"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            size="large"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LoginForm;
