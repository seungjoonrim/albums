// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a compnent
const Header = (props) => {
  const { viewStyle, textStyle } = styles; // (i.e. take textStyle from styles)

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    padding: 15,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
  },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

// Make the component available to other parts of the app
export default Header;
