import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {baseStyles} from '../helpers/baseStyles';

interface IPrimaryButton {
  text: string;
  onPrimaryAction: () => void;
  disabled?: boolean;
  testID?: string;
}

const PrimaryButton = React.memo((props: IPrimaryButton) => {
  return (
    <TouchableHighlight
      testID={props.testID}
      style={[
        baseStyles.loginButton,
        props.disabled ? {opacity: 0.5} : {opacity: 1},
      ]}
      onPress={props.disabled ? void 0 : props.onPrimaryAction}>
      <Text style={baseStyles.mainText}>{props.text}</Text>
    </TouchableHighlight>
  );
});

export default PrimaryButton;
