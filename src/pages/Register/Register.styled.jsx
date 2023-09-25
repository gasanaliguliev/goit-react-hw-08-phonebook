import styled from '@emotion/styled';

import { TextField } from '@mui/material';

import Button from '@mui/material/Button';

const InputField = TextField;
const LogInBtn = Button;

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const FormLabel = styled.label`
  color: black;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const RegisterInput = styled(InputField)`
  max-width: 400px;
  margin: 0 auto;
`;

export const RegisterButton = styled(LogInBtn)`
  max-width: fit-content;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
  &:hover {
    background-color: green;
   
  }
`;
