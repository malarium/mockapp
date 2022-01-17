import React from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {loginContext} from './contexts/loginContext';
import {rootContext} from './contexts/rootContext';
import {baseStyles} from './helpers/baseStyles';
import {mainPalette} from './helpers/baseStyleVariables';
import {Screen} from './helpers/enums';
import LoginOrSignupScreen from './screenComponents/LoginOrSignupScreen';
import LoginScreen from './screenComponents/LoginScreen';
import LoginSuccessScreen from './screenComponents/LoginSuccess';
import SignupScreen from './screenComponents/SignupScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = React.useState<Screen | null>(null);
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  React.useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(Screen.LoginOrSignupScreen);
      login.length < 3 && setLogin('user');
      password.length < 3 && setPassword('pass');
    }, 1500);
    return function () {
      setCurrentScreen(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <rootContext.Provider value={{currentScreen, setCurrentScreen}}>
      <SafeAreaView style={baseStyles.mainWrapper} testID="initialScreen">
        {currentScreen === Screen.LoginOrSignupScreen ? (
          <LoginOrSignupScreen />
        ) : currentScreen === Screen.LoginScreen ? (
          <loginContext.Provider value={{login, password}}>
            <LoginScreen />
          </loginContext.Provider>
        ) : currentScreen === Screen.LoginSuccess ? (
          <LoginSuccessScreen />
        ) : currentScreen === Screen.SignupScreen ? (
          <loginContext.Provider value={{setLogin, setPassword}}>
            <SignupScreen />
          </loginContext.Provider>
        ) : (
          <>
            <Text style={baseStyles.headerText}>DETOX TESTING LOADING...</Text>
            <ActivityIndicator size="large" color={mainPalette.teal} />
          </>
        )}
      </SafeAreaView>
    </rootContext.Provider>
  );
};

export default App;
