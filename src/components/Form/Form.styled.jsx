import styled from '@emotion/styled';

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


const MatButton = Button;
const MatInput = TextField;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const NameFormLabel = styled.label`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`;

export const FormNameInput = styled(MatInput)`
  display: block;
  width: 500px;
  margin-bottom: 15px;
  font-size: 18px;
  border-radius: 15px;
  border-color: blue;
`;

export const NumberFormLabel = styled.label`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`;
export const FormNumberInput = styled(MatInput)`
  display: block;
  max-width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
  border-radius: 15px;
  border-color: blue;
`;

export const FormSubmitBtn = styled(MatButton)`
  display: block;
  width: max-content;
  border-radius: 5px;

  &:hover {
    background-color: green;
  }
`;
