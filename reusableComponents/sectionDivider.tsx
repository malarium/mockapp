import React from 'react';
import {View} from 'react-native';
import {mainPalette} from '../helpers/baseStyleVariables';

const SectionDivider = React.memo(() => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: mainPalette.sienna,
        margin: 20,
        alignSelf: 'center',
      }}
    />
  );
});

export default SectionDivider;
