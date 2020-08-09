import styled from 'styled-components/native';

import { ILabelStyleProps } from '.';

export const Label = styled.Text<ILabelStyleProps>`
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
`;
