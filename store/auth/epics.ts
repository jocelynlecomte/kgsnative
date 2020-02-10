import { of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap, catchError, switchMap, mergeMap, delayWhen } from 'rxjs/operators';
import { ofType, Epic, ActionsObservable } from 'redux-observable';
import { LOGIN_START, LoginActionTypes, LoginStartAction, LOGOUT_START, LogoutStartAction } from './types';
import { loginSuccess, logoutSuccess } from './actions';

export const loginEpic = (action$: ActionsObservable<LoginActionTypes>) =>
    action$.pipe(
        ofType<LoginStartAction>(LOGIN_START),
        tap(action => console.log('intercepted in epic', action)),
        map(action => loginSuccess(action.username)),
    );

export const logoutEpic = (action$: ActionsObservable<LoginActionTypes>) =>
    action$.pipe(
        ofType<LogoutStartAction>(LOGOUT_START),
        tap(action => console.log('intercepted in epic', action)),
        map(() => logoutSuccess()),
    );
