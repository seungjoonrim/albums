// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    <Header headerText={'Albums, yo!'} />
);

// Render the component to the device
AppRegistry.registerComponent('albums', () => App);
