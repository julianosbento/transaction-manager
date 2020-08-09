import React, { useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Colors } from '../../../config';
import { translate } from '../../../lib';

import * as S from './styles';

import Transaction from './Transaction';
import { Label } from '../..';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../../store/ducks/transactions/actions';
import { typedUseSelector } from '../../../store';
import { ITransaction } from '../../../store/ducks/transactions/types';
import { deleteTransaction } from '../../../store/ducks/transactions/actions';

interface ITransactionProps {}

const TransactionsList: React.FC<ITransactionProps> = () => {
  const dispatch = useDispatch();
  const dispatchGetTransactions = () => dispatch(getTransactions());
  const dispatchDeleteTransaction = (transaction: ITransaction) =>
    dispatch(deleteTransaction(transaction));

  const { transactions } = typedUseSelector((state) => state.transactions);

  useEffect(() => {
    dispatchGetTransactions();
  }, []);

  const onRowDidOpen = (rowKey: string | number) => {};

  const renderItem = ({ item: { date, description, type, value } }: any) => (
    <S.TransactionContainer>
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
        right={0}
        backgroundColor={Colors.monza}
        onPress={() => deleteRow(rowMap, key)}>
        <Label
          color={Colors.white}
          label={translate('delete')}
          fontSize={hp(2)}
        />
      </S.Button>
    </S.Wrapper>
  );

  const deleteRow = (rowMap: any, rowKey: string | number) => {
    closeRow(rowMap, rowKey);
    const transaction = transactions.find(
      (transaction: ITransaction) => transaction.key === rowKey
    );
    if (transaction) dispatchDeleteTransaction(transaction);
  };

  const closeRow = (rowMap: any, rowKey: string | number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <SwipeListView
      disableRightSwipe
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
