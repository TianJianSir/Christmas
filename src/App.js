import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './pages/main';
import LuckDraw from './pages/luckDraw';

const Routes = [
    {
        id: '/',
        path: '/',
        component: Main,
        exact: true,
    },
    {
        id: '/luckDraw',
        path: '/luckDraw',
        component: LuckDraw,
        exact: true,
    }
];

const App = () => {
    return (
        <Router >
            <Switch>
                {
                    Routes.map((item) => <Route key={item.path} path={item.path} exact={item.exact} component={item.component} />)
                }
            </Switch>
        </Router>
    );
};

export default App;
