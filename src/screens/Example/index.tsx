import React, { useEffect } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { TransactionsList, TransactionForm } from '../../components';

import { Constants, Colors } from '../../config';
import { typedUseSelector } from '../../store';

const ExampleScreen: React.FC = () => {
  let transactionPanelRef: any = null;

  const { transactions } = typedUseSelector((state) => state.transactions);

  useEffect(() => {
    transactionPanelRef.hide();
  }, [transactions]);

  return (
    <>
      <TransactionsList />
      <SlidingUpPanel
        draggableRange={{ top: hp(60), bottom: 0 }}
        ref={(panelRef) => (transactionPanelRef = panelRef)}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <TransactionForm />
        </View>
      </SlidingUpPanel>
      <ActionButton
        buttonColor={Colors.eletric}
        onPress={() => transactionPanelRef.show()}
        position={Constants.CENTER}
      />
    </>
  );
};

export default React.memo(ExampleScreen);
