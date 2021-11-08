import { requestToken } from 'api/axios';
import { Children, useEffect, useMemo } from 'react';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from 'containers/App/store/actions';
import { Route, Switch, useHistory } from 'react-router';
import { selectAppStore } from 'containers/App/store/selecters';
import {
  ADMIN_ROUTES,
  USER_ROUTES,
  IRoutesInRole,
  ItemRoute,
} from 'configs/routes';
import LoggedInLayout from '../LoggedInLayout';
import ProtectRoute from 'components/ProtectRoute';
import UserDashboard from 'containers/User/UserDashboard';

export default function LayoutWrapper() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { info } = useSelector(selectAppStore);

  useEffect(() => {
    requestToken({ method: 'GET', url: API_URL.INFORMATIONS.SINGLE_ACCOUNT })
      .then(res => {
        if (res.data) {
          dispatch(setInfo({ ...res.data }));
        }
      })
      .catch(err => {
        handleError(err);
        localStorage.removeItem('token');
        history.replace('/login');
      });
  }, [dispatch, history]);

  const routes = useMemo(
    () => (info?.type === 'admin' ? ADMIN_ROUTES : USER_ROUTES),
    [info],
  );

  return <MapRoutes routes={routes} />;
}

const MapRoutes = ({ routes }: { routes: IRoutesInRole }) => {
  return (
    <Route>
      <LoggedInLayout sidebarRoutes={routes.SIDEBAR}>
        <Switch>
          <Route path='/test'>
            <UserDashboard />
          </Route>
          {Children.toArray(
            routes.COMPONENT.map(r => {
              if (r.child) {
                return Children.toArray(
                  r.child.map(c => {
                    return renderRoute(c);
                  }),
                );
              }
              return renderRoute(r);
            }),
          )}
        </Switch>
      </LoggedInLayout>
    </Route>
  );
};

const renderRoute = (r: ItemRoute) => {
  if (r.private) {
    return (
      <ProtectRoute exact={r.exact || true} path={r.path}>
        {r.component}
      </ProtectRoute>
    );
  }
  return (
    <Route exact={r.exact} path={r.path}>
      {r.component}
    </Route>
  );
};
