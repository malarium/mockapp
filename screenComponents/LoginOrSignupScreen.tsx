import React from 'react';
import {Text, View} from 'react-native';
import {rootContext} from '../contexts/rootContext';
import {baseStyles} from '../helpers/baseStyles';
import {mainPalette} from '../helpers/baseStyleVariables';
import {Screen} from '../helpers/enums';
import PrimaryButton from '../reusableComponents/baseButton';

const LoginOrSignupScreen = () => {
  const {setCurrentScreen} = React.useContext(rootContext);
  return (
    <View>
      <Text style={baseStyles.headerText}>LOGIN SCREEN</Text>
      <PrimaryButton
        text={'Login'}
        onPrimaryAction={() => setCurrentScreen(Screen.LoginScreen)}
      />
      <Text
        style={[
          baseStyles.mainText,
          {alignSelf: 'center', color: mainPalette.sienna},
        ]}>
        - OR -
      </Text>
      <PrimaryButton
        text={'Sign up'}
        onPrimaryAction={() => setCurrentScreen(Screen.SignupScreen)}
      />
    </View>
  );
};

export default LoginOrSignupScreen;
