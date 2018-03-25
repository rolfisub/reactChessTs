import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {GameContainer as Game} from "./components/game/game";
import {ChessGame} from "./model/game";

const game = new ChessGame({});

ReactDOM.render(
    <Game game={game}/>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
