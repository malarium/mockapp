import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {loginContext} from '../contexts/loginContext';
import {rootContext} from '../contexts/rootContext';
import {baseStyles} from '../helpers/baseStyles';
import {windowWidth} from '../helpers/baseStyleVariables';
import {Screen} from '../helpers/enums';
import PrimaryButton from '../reusableComponents/baseButton';

const LoginScreen = () => {
  const {login, password} = React.useContext(loginContext);
  const {setCurrentScreen} = React.useContext(rootContext);
  const [loginInput, setLoginInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  function checkCredentials() {
    loginInput === login &&
      passwordInput === password &&
      setCurrentScreen(Screen.LoginSuccess);
  }
  return (
    <View style={{width: windowWidth - 50, marginTop: -200}}>
      <Text style={baseStyles.headerText}>LOG IN:</Text>
      <TextInput
        placeholder="Type your login"
        style={baseStyles.textInput}
        value={loginInput}
        onChangeText={setLoginInput}
        testID="login"
      />
      <TextInput
        secureTextEntry
        placeholder="Type your password"
        style={baseStyles.textInput}
        value={passwordInput}
        onChangeText={setPasswordInput}
        testID="password"
      />
      <View style={{alignItems: 'center'}}>
        <PrimaryButton
          text={'PROCEED'}
          onPrimaryAction={() => checkCredentials()}
          disabled={loginInput.length < 3 || passwordInput.length < 3}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
