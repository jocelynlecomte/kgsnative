import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content, Text, Header, Left, Right, Button, Icon, Body, Title } from 'native-base';

import Login from '../../components/login/Login';
import { AppState } from '../../store/index';
import { logoutStart } from '../../store/auth/actions';

const Main: React.FunctionComponent = () => {
    const loggedIn = useSelector((state: AppState) => state.auth.loggedIn);
    const username = useSelector((state: AppState) => state.auth.username);

    const dispatch = useDispatch();

    function logoutButtonPressed(): void {
        dispatch(logoutStart(username));
    }

    function getRight(): React.ReactNode {
        if (loggedIn) {
            return (
                <Button onPress={logoutButtonPressed}>
                    <Icon name="exit" />
                </Button>
            );
        }
    }

    function getContent(): React.ReactNode {
        if (loggedIn) {
            return <Text>You are logged in</Text>;
        } else {
            return <Login />;
        }
    }

    return (
        <Container>
            <Header>
                <Left />
                <Body>
                    <Title>
                        <Text>KGS Native</Text>
                    </Title>
                </Body>
                <Right>{getRight()}</Right>
            </Header>
            <Content>{getContent()}</Content>
        </Container>
    );
};

export default Main;
