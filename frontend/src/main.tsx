/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import App from './App.tsx'
import Home from './pages/Home.tsx';
import Editor from './pages/Editor.tsx';
import NotFound from './pages/NotFound.tsx';

const root = document.getElementById('root')

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
