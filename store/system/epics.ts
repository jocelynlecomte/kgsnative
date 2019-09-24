import { of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap, catchError, switchMap, mergeMap, delayWhen } from 'rxjs/operators';
import { ofType, Epic, ActionsObservable } from 'redux-observable';
import { SystemState, LOGIN_START, LOGOUT, SystemAction, LoginStartAction } from './types';
import { loginSuccess } from './actions';

export const loginEpic = (action$: ActionsObservable<SystemAction>) =>
    action$.pipe(
        ofType<LoginStartAction>(LOGIN_START),
        tap(action => console.log('intercepted in epic', action)),
        map(action => loginSuccess(action.username))
    );

/* export const logoutEpic = action$ =>
    action$.pipe( 
        ofType(LOGOUT),
        tap(action => console.log('intercepted in epic', action)),
    ); */
