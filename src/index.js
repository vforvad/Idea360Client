import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

/* eslint-disable */
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
/* eslint-enable */
