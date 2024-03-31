import App from './app';
import './app.less'
import { createRoot } from 'react-dom/client';

const el = document.getElementById('app');

const root =createRoot(el as HTMLElement);

root.render(App());

