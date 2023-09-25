import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const MlButton = Button;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const MenuText = styled.p`
  margin: 0;
  margin-right: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const MenuButton = styled(MlButton)`
  border-radius: 10px;
  padding-top: 5px;
  &:hover {
    background-color: green;
    
  }
`;
