import React from 'react';
import { Text } from 'react-native';

import { Constants } from '../../../config';
import { translate } from '../../../lib';

import * as S from './styles';

interface IExampleProps {}

const Example: React.FC<IExampleProps> = ({}) => {
  return (
    <S.Wrapper>
      <Text>{translate('example')}</Text>
    </S.Wrapper>
  );
};

export default React.memo(Example);
