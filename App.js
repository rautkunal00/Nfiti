import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './app/routes/AuthNavigation';
import { ThemeProvider } from 'styled-components/native';
import theme from './app/styles/themes';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AuthNavigation />
            </NavigationContainer>
        </ThemeProvider>
    );
}
