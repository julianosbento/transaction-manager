import React, { useState } from 'react';
import moment from 'moment';
import { TextInputMask } from 'react-native-masked-text';

import * as S from './styles';

import { Constants, Colors } from '../../../config';
import { translate } from '../../../lib';
import { useDispatch } from 'react-redux';
import { createTransaction } from '../../../store/ducks/transactions/actions';

interface ITransactionFormProps {}

const TransactionForm: React.FC<ITransactionFormProps> = () => {
  const [value, setValue] = useState('');
  const [type, setType] = useState(Constants.RECIPE);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const dispatchCreateTransaction = () =>
    dispatch(
      createTransaction({
        date: moment().format(Constants.DATE),
        description,
        value,
        type,
        key: Math.random(),
      })
    );

  const handleCreateTransaction = () => {
    dispatchCreateTransaction();
    setDescription('');
    setType(Constants.RECIPE);
    setValue('');
  };

  const disabled = !value.length || !description.length;

  return (
    <S.Wrapper>
      <S.Container>
        <S.FilterButton
          style={{
            backgroundColor:
              type === Constants.RECIPE ? Colors.robbinsEdge : Colors.heart,
          }}
          mode='contained'
          onPress={() => setType(Constants.RECIPE)}>
          {translate('recipe')}
        </S.FilterButton>

        <S.FilterButton
          mode='contained'
          style={{
            backgroundColor:
              type === Constants.EXPENSE ? Colors.robbinsEdge : Colors.heart,
          }}
          onPress={() => setType(Constants.EXPENSE)}>
          {translate('expense')}
        </S.FilterButton>
      </S.Container>

      <S.TextInput
        keyboardType='number-pad'
        label={translate('value')}
        mode='outlined'
        onChangeText={(value) => setValue(value)}
        selectionColor={Colors.robbinsEdge}
        value={value}
        render={(props) => (
          <TextInputMask
            options={{
              precision: 2,
              separator: translate('currency_separator'),
              delimiter: translate('currency_delimiter'),
              unit: `${translate('currency_symbol')} `,
              suffixUnit: '',
            }}
            type={'money'}
            {...props}
          />
        )}
      />

      <S.TextInput
        label={translate('description')}
        mode='outlined'
        onChangeText={(description) => setDescription(description)}
        selectionColor={Colors.robbinsEdge}
        value={description}
      />

      <S.Button
        disabled={disabled}
        mode='contained'
        onPress={() => handleCreateTransaction()}>
        {translate('save')}
      </S.Button>
    </S.Wrapper>
  );
};

export default React.memo(TransactionForm);
