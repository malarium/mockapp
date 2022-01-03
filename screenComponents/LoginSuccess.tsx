import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {rootContext} from '../contexts/rootContext';
import {baseStyles} from '../helpers/baseStyles';
import {windowHeight, windowWidth} from '../helpers/baseStyleVariables';
import {Screen} from '../helpers/enums';
import PrimaryButton from '../reusableComponents/baseButton';
import SectionDivider from '../reusableComponents/sectionDivider';

const LoginSuccessScreen = () => {
  const {setCurrentScreen} = React.useContext(rootContext);
  return (
    <ScrollView
      style={{width: windowWidth - 50, height: windowHeight}}
      testID="logSuccess">
      <View>
        <Text style={baseStyles.headerText}>Logging successful</Text>
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <Text style={baseStyles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          architecto blanditiis expedita beatae suscipit sapiente rerum quam
          iste inventore, animi dicta hic accusamus exercitationem nemo aliquid
          sit dolorem et magnam!
        </Text>
        <SectionDivider />
        <View style={{alignItems: 'center'}}>
          <PrimaryButton
            text={'RETURN'}
            onPrimaryAction={() => setCurrentScreen(Screen.LoginOrSignupScreen)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginSuccessScreen;
