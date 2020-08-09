import React from 'react';
import { useDispatch } from 'react-redux';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { typedUseSelector } from '../../../store';
import {
  showVisibility,
  hideVisibility,
} from '../../../store/ducks/visibility/actions';

const ToggleVisibility: React.FC = () => {
  const dispatch = useDispatch();
  const dispatchHideVisibility = () => dispatch(hideVisibility());
  const dispatchShowVisibility = () => dispatch(showVisibility());

  const { visibility } = typedUseSelector((state) => state.visibility);

  const toggleVisibility = () => {
    visibility ? dispatchHideVisibility() : dispatchShowVisibility();
  };

  return (
    <FeatherIcons
      style={{ marginBottom: hp(2) }}
      onPress={() => toggleVisibility()}
      name={visibility ? 'eye-off' : 'eye'}
      size={hp(4)}
    />
  );
};

export default React.memo(ToggleVisibility);
