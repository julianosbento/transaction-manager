import React, { useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

import { Constants, Colors } from '../../../config';
import { translate } from '../../../lib';

import * as S from './styles';

import Transaction from './Transaction';
import { Label } from '../..';
import { useDispatch } from 'react-redux';
import {
  getTransactions,
  setTransactions,
} from '../../../store/ducks/transactions/actions';
import { typedUseSelector } from '../../../store';
import { ITransaction } from '../../../store/ducks/transactions/types';
import { getDatesFromTransactions } from '../../../utils';

interface ITransactionProps {}

const TransactionsList: React.FC<ITransactionProps> = () => {
  const dispatch = useDispatch();
  const dispatchGetTransactions = () => dispatch(getTransactions());
  const dispatchSetTransactions = (transactions: ITransaction[]) =>
    dispatch(setTransactions(transactions));

  const [dates, setDates] = useState<string[]>([]);

  const { transactions } = typedUseSelector((state) => state.transactions);

  useEffect(() => {
    dispatchGetTransactions();
    setDates(getDatesFromTransactions(transactions));
  }, []);

  const closeRow = (rowMap: any, rowKey: string | number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: any, rowKey: string | number) => {
    closeRow(rowMap, rowKey);
    const newData = [...transactions];
    const prevIndex = transactions.findIndex(
      (transaction: any) => transaction.key === rowKey
    );
    newData.splice(prevIndex, 1);
    dispatchSetTransactions(newData);
  };

  const onRowDidOpen = (rowKey: string | number) => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({ item: { date, description, type, value } }: any) => (
    <S.TransactionContainer onPress={() => console.log('You touched me')}>
      <Transaction
        date={date}
        description={description}
        type={type}
        value={value}
      />
    </S.TransactionContainer>
  );

  const renderHiddenItem = ({ item: { key } }: any, rowMap: any) => (
    <S.Wrapper>
      <S.Button
        backgroundColor={Colors.outerSpace}
        onPress={() => closeRow(rowMap, key)}>
        <Label label={translate('close')} />
      </S.Button>
      <S.Button
        right={0}
        backgroundColor={Colors.monza}
        onPress={() => deleteRow(rowMap, key)}>
        <Label label={translate('delete')} />
      </S.Button>
    </S.Wrapper>
  );

  return (
    <SwipeListView
      data={transactions}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
    />
  );
};

export default React.memo(TransactionsList);
