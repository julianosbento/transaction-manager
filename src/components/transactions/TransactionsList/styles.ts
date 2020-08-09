import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Colors, Constants } from '../../../config';

interface IButton {
  backgroundColor: string;
  right?: string | number;
}

export const TransactionContainer = styled.TouchableHighlight`
  background-color: ${Colors.outerSpace};
  border-bottom-color: ${Colors.white};
  border-bottom-width: 3;
  justify-content: center;
  height: ${hp(10)};
`;

export const Button = styled.TouchableOpacity<IButton>`
  align-items: flex-end;
  background-color: ${Colors.monza};
  padding-bottom: ${hp(5)};
  padding-right: ${hp(2)};
  padding-top: ${hp(3.5)};
  width: 100%;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-left: ${hp(2)};
`;
