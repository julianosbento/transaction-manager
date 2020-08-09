import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../config';

interface ITextProps {
  color: string;
}

export const Text = styled.Text<ITextProps>`
  align-self: center;
  color: ${({ color }) => color};
  font-size: ${hp(8)};
  font-weight: 500;
  margin-bottom: ${hp(2)};
  margin-left: ${hp(2)};
  margin-right: ${hp(2)};
  margin-top: ${hp(2)};
`;

export const Wrapper = styled.View`
  background-color: ${Colors.gallery};
  align-items: center;
  justify-content: center;
`;
