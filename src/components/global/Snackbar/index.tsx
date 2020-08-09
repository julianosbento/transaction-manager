import React from 'react';
import { Snackbar as SnackbarPaper } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { typedUseSelector } from '../../../store';
import { hideSnackbar } from '../../../store/ducks/snackbar/actions';
import { translate } from '../../../lib';

const Snackbar: React.FC = ({}) => {
  const dispatch = useDispatch();
  const dispatchHideSnackbar = () => dispatch(hideSnackbar());

  const {
    snackbar: { duration, message, visible },
  } = typedUseSelector((state) => state.snackbar);

  return (
    <SnackbarPaper
      duration={duration}
      visible={visible}
      onDismiss={() => dispatchHideSnackbar()}>
      {translate(message)}
    </SnackbarPaper>
  );
};

export default React.memo(Snackbar);
