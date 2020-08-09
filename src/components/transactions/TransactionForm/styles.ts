import styled from 'styled-components/native';
import { Button as ButtonPaper } from 'react-native-paper';
import { TextInput as TextInputPaper } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { Colors } from '../../../config';

export const Button = styled(ButtonPaper)`
  align-self: center;
  padding-bottom: ${hp(1)};
  padding-left: ${hp(1)};
  padding-right: ${hp(1)};
  padding-top: ${hp(1)};
  width: ${wp(50)};
`;

export const FilterButton = styled(ButtonPaper)`
  border-radius: 50;
`;

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${hp(2)};
`;

export const PanelStrap = styled.View`
  align-self: center;
  background-color: ${Colors.mercury};
  border-radius: 50;
  height: ${hp(1)};
  margin-bottom: ${hp(7)};
  width: ${wp(15)};
`;

export const TextInput = styled(TextInputPaper)`
  align-self: center;
  margin-bottom: ${hp(2)};
  width: ${wp(80)};
`;

export const Wrapper = styled.View`
  align-self: center;
  background-color: ${Colors.gallery};
  border-top-left-radius: ${hp(3)};
  border-top-right-radius: ${hp(3)};
  flex: 1;
  height: 100%;
  justify-content: center;
  padding-bottom: ${hp(47)};
  width: 100%;
`;
