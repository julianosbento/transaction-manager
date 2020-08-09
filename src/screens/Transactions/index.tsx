import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  TransactionsList,
  TransactionForm,
  Balance,
  Snackbar,
} from '../../components';

import { Constants, Colors } from '../../config';
import { typedUseSelector } from '../../store';

const TransactionsScreen: React.FC = () => {
  let transactionPanelRef: any = null;
  const [showFAB, setShowFAB] = useState(false);

  const { transactions } = typedUseSelector((state) => state.transactions);

  useEffect(() => {
    transactionPanelRef.hide();
  }, [transactions]);

  const handlePanel = () => {
    transactionPanelRef.show();
    setShowFAB(false);
  };

  return (
    <>
      <Balance />
      <TransactionsList />
      <SlidingUpPanel
        onBottomReached={() => setShowFAB(true)}
        draggableRange={{ top: hp(60), bottom: 0 }}
        ref={(panelRef) => (transactionPanelRef = panelRef)}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <TransactionForm />
        </View>
      </SlidingUpPanel>
      {showFAB ? (
        <ActionButton
          buttonColor={Colors.eletric}
          onPress={() => handlePanel()}
          position={Constants.CENTER}
        />
      ) : null}
      <Snackbar />
    </>
  );
};

export default React.memo(TransactionsScreen);
