import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Constants } from '../../../../config';
import { translate } from '../../../../lib';

import dataMap from './dataMap';
import * as S from './styles';
import { Label } from '../../..';
import { getTimeTimeFormat } from '../../../../utils';

interface ITransactionProps {
  date: string;
  description: string;
  type: string;
  value: string | number;
}

const Transaction: React.FC<ITransactionProps> = ({
  date,
  description,
  type,
  value,
}) => {
  const { color, name } = dataMap[type];
  return (
    <S.Container
      flexDirection={Constants.ROW}
      justifyContent={Constants.FLEX_START}>
      <MaterialIcons color={color} name={name} size={hp(4)} />
      <S.Container alignItems={Constants.FLEX_START}>
        <Label label={value} fontSize={hp(2.5)} fontWeight={500} />
        <Label label={description} />
      </S.Container>
      <Label label={getTimeTimeFormat(date)} />
    </S.Container>
  );
};

Transaction.defaultProps = {
  date: '',
  description: '',
  type: '',
  value: '',
};

export default React.memo(Transaction);
