import { requestToken } from 'api/axios';
import { Children, useEffect } from 'react';
import API_URL from 'api/url';
import { useDispatch } from 'react-redux';
import { setInfo } from 'containers/App/store/actions';
import { Route, Switch, useHistory } from 'react-router';
import {
  ROUTES,
  IRoutesInRole,
  ItemRoute,
} from 'configs/routes';
import LoggedInLayout from '../LoggedInLayout';
import ProtectRoute from 'components/ProtectRoute';
import { Alert } from 'components/Alert';

export default function LayoutWrapper() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    requestToken({ method: 'GET', url: API_URL.INFO.GET })
      .then(res => {
        if (res.data) {
          dispatch(setInfo({ ...res.data }));
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
        history.replace('/login');
        Alert({icon: "error", name: "Phiên đăng nhập đã hết hạn"});
      });
  }, [dispatch, history]);

  const routes = ROUTES;

  return <MapRoutes routes={routes} />;
}

const MapRoutes = ({ routes }: { routes: IRoutesInRole }) => {
  return (
    <Route>
      <LoggedInLayout sidebarRoutes={routes.SIDEBAR}>
        <Switch>
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
