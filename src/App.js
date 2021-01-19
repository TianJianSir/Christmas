import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './pages/main';
import LuckDraw from './pages/luckDraw';
import Gift from './pages/gift';

const Routes = [
    {
        id: '/newYear',
        path: '/newYear',
        component: Main,
        exact: true,
    },
    {
        id: '/newYear/gift',
        path: '/newYear/gift',
        component: Gift,
        exact: true,
    },
    {
        id: '/newYear/luckDraw',
        path: '/newYear/luckDraw',
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
