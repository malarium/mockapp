import {StyleSheet} from 'react-native';
import {
  buttonBorderRadius,
  fontSizeHeader,
  fontSizeRegular,
  mainFontColour,
  mainPalette,
  windowHeight,
  windowWidth,
} from './baseStyleVariables';

export const baseStyles = StyleSheet.create({
  mainWrapper: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: mainPalette.charcoal,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: windowHeight / 40,
    paddingHorizontal: windowWidth / 20,
  },
  mainText: {
    color: mainFontColour,
    fontSize: fontSizeRegular,
  },
  textWarning: {
    color: mainPalette.sienna,
  },
  headerText: {
    color: mainPalette.sienna,
    fontSize: fontSizeHeader,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 40,
  },
  loginButton: {
    marginTop: 50,
    backgroundColor: mainPalette.sandy,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderTopLeftRadius: buttonBorderRadius,
    borderBottomLeftRadius: buttonBorderRadius,
    borderTopRightRadius: buttonBorderRadius,
    borderBottomRightRadius: buttonBorderRadius,
    width: windowWidth / 2,
    marginBottom: 50,
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: mainFontColour,
    borderRadius: buttonBorderRadius,
    padding: 10,
    color: mainFontColour,
    marginVertical: 10,
    fontSize: 18,
  },
});
