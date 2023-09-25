import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const MatButton = Button;

export const ContsctList = styled.ul`
  padding-left: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const DeleteBtn = styled(MatButton)`
  padding-top: 7px;
  margin-top: auto;
  border-radius: 5px;

  &:hover {
    background-color: green;
    
  }
`;
