import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Colors, Constants } from '../../../config';

import * as S from './styles';

export interface ILabelStyleProps {
  color?: string | undefined;
  fontSize?: string | number | undefined;
  fontWeight?: string | number | undefined;
  margin?: string | number | undefined;
}

interface ILabelProps extends ILabelStyleProps {
  label: string | number;
}

const Label: React.FC<ILabelProps> = ({
  color,
  fontSize,
  fontWeight,
  label,
  margin,
}) => {
  return (
    <S.Label
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}>
      {label}
    </S.Label>
  );
};

Label.defaultProps = {
  color: Colors.black,
  label: '',
  margin: 0,
  fontSize: hp(2),
  fontWeight: Constants.NORMAL,
};

export default React.memo(Label);
