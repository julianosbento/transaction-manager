import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Colors, Constants } from '../../../config';

import * as S from './styles';
import { secureCurrency } from '../../../utils';

export interface ILabelStyleProps {
  color?: string | undefined;
  fontSize?: string | number | undefined;
  fontWeight?: string | number | undefined;
  secure?: boolean;
  margin?: string | number | undefined;
}

interface ILabelProps extends ILabelStyleProps {
  label: string | number;
}

const Label: React.FC<ILabelProps> = ({
  color,
  fontSize,
  fontWeight,
  secure,
  label,
  margin,
}) => {
  return (
    <S.Label
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}>
      {secure ? secureCurrency(label.toString()) : label}
    </S.Label>
  );
};

Label.defaultProps = {
  color: Colors.black,
  secure: false,
  label: '',
  margin: 0,
  fontSize: hp(2),
  fontWeight: Constants.NORMAL,
};

export default React.memo(Label);
