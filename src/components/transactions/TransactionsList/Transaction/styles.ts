import styled from 'styled-components/native';
import { Colors } from '../../../../config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface IContainerProps {
  alignItems?: string;
  backgroundColor?: string;
  flex?: number;
  flexDirection?: string;
  justifyContent?: string;
}

export const Container = styled.View<IContainerProps>`
  align-items: ${({ alignItems }) => alignItems || 'center'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || Colors.gallery};
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  padding-bottom: ${hp(1)};
  padding-left: ${hp(2)};
  padding-right: ${hp(1)};
  padding-top: ${hp(1)};
`;
