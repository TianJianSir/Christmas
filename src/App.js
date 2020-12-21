import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './pages/main';
import LuckDraw from './pages/luckDraw';
import Gift from './pages/gift';

const Routes = [
    {
        id: '/christmas',
        path: '/christmas',
        component: Main,
        exact: true,
    },
    {
        id: '/christmas/gift',
        path: '/christmas/gift',
        component: Gift,
        exact: true,
    },
    {
        id: '/christmas/luckDraw',
        path: '/christmas/luckDraw',
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
