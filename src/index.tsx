import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Board } from './components/board/board';

ReactDOM.render(
    <Board
        height={400}
        width={400}
        id={1}
    />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
