import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Container, Content, Text, Header, Form, Item, Input, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const App: React.ReactNode = () => {
    const [ready, setReady] = useState(false);

    async function prepareFont(): Promise<void> {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line @typescript-eslint/camelcase
            ...Ionicons.font,
        });
        setReady(true);
    }

    useEffect(() => {
        prepareFont();
    }, []);

    if (!ready) {
        return <AppLoading />;
    }

    return (
        <Container>
            <Header />
            <Content>
                <Text>KGSNative</Text>
                <Text>Please log in first</Text>
                <Form>
                    <Item>
                        <Input placeholder="Username"></Input>
                    </Item>
                    <Item>
                        <Input placeholder="Password"></Input>
                    </Item>
                    <Button full>
                        <Text>Login</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

export default App;
