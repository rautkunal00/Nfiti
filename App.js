import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './app/routes/AuthNavigation';
import { ThemeProvider } from 'styled-components/native';
import theme from './app/styles/themes';


import {StyleProvider} from 'native-base'
import getTheme from './app/utils/native-base-theme/components';
import material from './app/utils/native-base-theme/variables/variables';

export default function App() {
    return (
        <StyleProvider style={getTheme(material)}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <AuthNavigation />
                </NavigationContainer>
            </ThemeProvider>
        </StyleProvider>
    );
}
