import color from '@/theme/color';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface MenuProps {
  isSelected: boolean;
}

export const Menu = styled.div<MenuProps>`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  gap: 8px;
  cursor: pointer;

  background: ${({ isSelected }) => isSelected && '#ebebeb'};
  color: ${({ isSelected }) => !isSelected && color.grey[1]};

  &:hover {
    background: #ebebeb;
  }
`;
