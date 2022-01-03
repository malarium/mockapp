import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {loginContext} from '../contexts/loginContext';
import {rootContext} from '../contexts/rootContext';
import {baseStyles} from '../helpers/baseStyles';
import {windowWidth} from '../helpers/baseStyleVariables';
import {Screen} from '../helpers/enums';
import PrimaryButton from '../reusableComponents/baseButton';
import SectionDivider from '../reusableComponents/sectionDivider';

const SignupScreen = () => {
  const {setLogin, setPassword} = React.useContext(loginContext);
  const {setCurrentScreen} = React.useContext(rootContext);
  const [loginInput, setLoginInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [passwordInputRepeated, setPasswordInputRepeated] = React.useState('');
  const [passwordsAreTheSame, setPasswordAreTheSame] = React.useState(true);

  function handleRegistration() {
    if (passwordInput === passwordInputRepeated) {
      setLogin(loginInput);
      setPassword(passwordInput);
      setCurrentScreen(Screen.LoginSuccess);
      return;
    }
    setPasswordAreTheSame(false);
  }

  return (
    <View style={{width: windowWidth - 50, marginTop: -200}}>
      <Text style={baseStyles.headerText}>FILL THE FORM:</Text>
      <TextInput
        placeholder="Choose your login"
        style={baseStyles.textInput}
        value={loginInput}
        onChangeText={setLoginInput}
        testID="newLogin"
      />
      <TextInput
        placeholder="Choose your password"
        style={baseStyles.textInput}
        value={passwordInput}
        onChangeText={setPasswordInput}
        testID="newPassword"
      />
      <TextInput
        placeholder="Repeat your password"
        style={baseStyles.textInput}
        value={passwordInputRepeated}
        onChangeText={setPasswordInputRepeated}
        testID="newPasswordRepeated"
      />
      <SectionDivider />
      {!passwordsAreTheSame && (
        <Text
          style={[baseStyles.mainText, baseStyles.textWarning]}
          testID="warningOnFormFill">
          Both passwords must be identical!
        </Text>
      )}
      <View style={{alignItems: 'center'}}>
        <PrimaryButton
          text={'REGISTER'}
          onPrimaryAction={() => handleRegistration()}
          disabled={
            loginInput.length < 3 ||
            passwordInput.length < 3 ||
            passwordInputRepeated.length < 3
          }
        />
      </View>
    </View>
  );
};

export default SignupScreen;
