import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, Form, Item, Input, Button } from 'native-base';
import { AppState } from '../../store/index';
import { loginStart } from '../../store/auth/actions';

const Login: React.FunctionComponent = () => {
    const loggedIn = useSelector((state: AppState) => state.auth.loggedIn);
    const dispatch = useDispatch();

    function loginButtonPressed(): void {
        dispatch(loginStart('jocelyn', 'cobra0'));
    }

    function addLogin(): React.ReactNode {
        if (!loggedIn) {
            return null;
        }

        return <Text>You are logged in</Text>;
    }

    return (
        <Fragment>
            <Text>Please log in first</Text>
            <Form>
                <Item>
                    <Input placeholder="Username"></Input>
                </Item>
                <Item>
                    <Input placeholder="Password"></Input>
                </Item>
                <Button full onPress={loginButtonPressed}>
                    <Text>Login</Text>
                </Button>
                {addLogin()}
            </Form>
        </Fragment>
    );
};

export default Login;
