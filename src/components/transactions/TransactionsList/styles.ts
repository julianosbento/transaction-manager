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
  border-bottom-width: 1;
  justify-content: center;
  height: ${hp(10)};
`;

export const Button = styled.TouchableOpacity<IButton>`
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || Colors.robbinsEdge};
  bottom: 10;
  justify-content: center;
  position: ${Constants.ABSOLUTE};
  right: ${({ right }) => right || 75};
  top: 0;
  width: 75;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  padding-left: ${hp(2)};
`;
