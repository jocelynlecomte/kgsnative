import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
    state = {
        isReady: false,
    };

    async componentDidMount(): Promise<void> {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line @typescript-eslint/camelcase
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render(): React.ReactNode {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <Container>
                <Text>Open up App.tsx to start working on your app, juju!</Text>
            </Container>
        );
    }
}
