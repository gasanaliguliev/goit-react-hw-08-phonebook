import styled from '@emotion/styled';

import { TextField } from '@mui/material';

const MatInput = TextField;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

export const FilterInput = styled(MatInput)`
  margin-top: 15px;
  display: block;
  max-width: 300px;
  font-size: 18px;
`;
