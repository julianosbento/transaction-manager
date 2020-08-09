import React from 'react';
import AnimateNumber from 'react-native-animate-number';

import { translate } from '../../../lib';

import * as S from './styles';
import { typedUseSelector } from '../../../store';
import { ToggleVisibility, Logo } from '../..';
import { secureCurrency } from '../../../utils';
import { Colors } from '../../../config';

interface IBalanceProps {}

const Balance: React.FC<IBalanceProps> = () => {
  const { balance } = typedUseSelector((state) => state.transactions);
  const { visibility } = typedUseSelector((state) => state.visibility);
  return (
    <S.Wrapper>
      <Logo />
      <S.Text color={balance < 0 ? Colors.monza : Colors.black}>
        {!visibility ? (
          <AnimateNumber
            value={balance}
            formatter={(val: string) => {
              return (
                translate('currency_symbol') + ' ' + parseFloat(val).toFixed(2)
              );
            }}
          />
        ) : (
          secureCurrency(balance.toString())
        )}
      </S.Text>
      <ToggleVisibility />
    </S.Wrapper>
  );
};

export default React.memo(Balance);
