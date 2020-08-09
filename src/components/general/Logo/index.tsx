import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../../config';

import * as S from './styles';

interface ILogoProps {
  size?: number;
}

const Logo: React.FC<ILogoProps> = ({ size }) => {
  return (
    <S.Wrapper>
      <MaterialIcons
        name='expand-less'
        size={size}
        color={Colors.eletric}
        style={{ margin: hp(2), top: 0.1, position: 'absolute' }}
      />
      <MaterialIcons name='expand-more' size={size} color={Colors.eletric} />
    </S.Wrapper>
  );
};

Logo.defaultProps = {
  size: hp(8),
};

export default React.memo(Logo);
