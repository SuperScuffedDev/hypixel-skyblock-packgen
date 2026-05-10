/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy } from 'solid-js';
import { Route, Router } from '@solidjs/router';
import App from './App.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const Editor = lazy(() => import('./pages/Editor.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

const root = document.getElementById('root');

render(
    () => (
        <Router root={App}>
            <Route path="/" component={Home}/>
            <Route path="/editor" component={Editor}/>
            <Route path="*" component={NotFound}/>
        </Router>
    ),
    root!
);
